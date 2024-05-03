import { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import isUndefined from 'lodash/isUndefined';
import { CategoryScale } from "chart.js";
import LineChart from './LineChart';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import UploadFile from './UploadFile';

const COLORS = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#58595b',
  '#8549ba'
];

function FoodTracking() {
  const [feedsArray, setFeedsArray] = useState([]);
  const [filteredFeedsArray, setFilteredFeedsArray] = useState([]);
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();
  const [fileData, setFileData] = useState();
  const [fileMisConfigured, setFileMisConfigured] = useState(false);

  useEffect(() => {
    const getAverage = (array, n) => {
      let sum = 0;
      let count = 0;
      if (n - 2 >= 0) {
        sum += array[n - 2];
        count++;
      }
      if (n - 1 >= 0) {
        sum += array[n - 1];
        count++;
      }
      sum += array[n];
      count++;
      if (n + 1 < array.length) {
        sum += array[n + 1];
        count++;
      }
      if (n + 2 < array.length) {
        sum += array[n + 2];
        count++;
      }

      return sum / count;
    }

    if (!isUndefined(fileData) && !fileMisConfigured) {
      const tempFeedsByDay = {};
      fileData.forEach(feed => {
        const date = new Date(feed.time).toLocaleDateString('en-US');
        const hourOfDay = new Date(feed.time).getHours();
        const timeClassification = hourOfDay < 6 ? 'night' : hourOfDay < 12 ? 'morning' : hourOfDay < 4 ? 'afternoon' : hourOfDay < 9 ? 'evening' : 'night';
        tempFeedsByDay[date] === undefined ? tempFeedsByDay[date] = { feeds: [], date } : tempFeedsByDay[date].feeds.push({ date, hour: hourOfDay, timeClassification, quantity: feed.ml });
      });
      Object.values(tempFeedsByDay).forEach(day => {
        let sum = 0;
        day.feeds.forEach(feed => sum += feed.quantity);
        day.totalIntake = sum;
        day.numberOfFeeds = day.feeds.length;
        day.averageFeedAmount = sum / day.feeds.length;
        day.movingAverages = {};
      });

      // calculate moving averages
      Object.values(tempFeedsByDay).forEach((day, i) => {
        day.movingAverages = {
          totalIntake: getAverage(Object.values(tempFeedsByDay).map(x => x.totalIntake), i),
          numberOfFeeds: getAverage(Object.values(tempFeedsByDay).map(x => x.numberOfFeeds), i),
          averageFeedAmount: getAverage(Object.values(tempFeedsByDay).map(x => x.averageFeedAmount), i),
        }
      });

      setFeedsArray(Object.values(tempFeedsByDay));
      setFilteredFeedsArray(Object.values(tempFeedsByDay));
      setStartDay(Object.keys(tempFeedsByDay)[0]);
      setEndDay(Object.keys(tempFeedsByDay)[Object.keys(tempFeedsByDay).length - 1]);
    }
  }, [fileData, fileMisConfigured]);

  Chart.register(CategoryScale);

  const onUploadFile = (file) => {
    console.log(file);
    setFileMisConfigured(false);
    setFileData(undefined);
    const tmpFileData = [];
    file.data.forEach((row, i) => {
      if (isUndefined(row.Time) || isUndefined(row["Amount (ml)"])) {
        if (i < file.data.length - 1) {
          setFileMisConfigured(true);
          console.log('file misconfigured!')
        }
      } else {
        tmpFileData.push({
          time: row.Time,
          ml: Number(row["Amount (ml)"])
        });
      }
    });

    setFileData(tmpFileData);
  }

  const setTimeStart = (newStart) => {
    const newStartDate = new Date(newStart);
    const endDate = new Date(endDay);
    const filteredDates = feedsArray.filter(x => {
      const xDate = new Date(x.date);
      return xDate > newStartDate && xDate < endDate;
    });

    setFilteredFeedsArray(filteredDates);
    setStartDay(newStart);
  }

  const setTimeEnd = (newEnd) => {
    const newEndDate = new Date(newEnd);
    const startDate = new Date(startDay);
    const filteredDates = feedsArray.filter(x => {
      const xDate = new Date(x.date);
      return xDate > startDate && xDate < newEndDate;
    });

    setFilteredFeedsArray(filteredDates);
    setEndDay(newEnd);
  }

  if (fileMisConfigured) {
    return <div>
      <UploadFile onUpload={onUploadFile} />
      <h3>File is misconfigured. Must have column headers "Time" and "Amount (ml)"</h3>
    </div>
  }

  return <div style={{ width: '80%', margin: 'auto' }}>
   <UploadFile onUpload={onUploadFile} /> <div>
        {!isUndefined(filteredFeedsArray) && <div>
          <DatePicker value={dayjs(startDay)} onChange={(newValue) => setTimeStart(newValue)} />
          <DatePicker value={dayjs(endDay)} onChange={(newValue) => setTimeEnd(newValue)} />
        </div>}

        <LineChart
          chartData={{
            labels: filteredFeedsArray.map(x => x.date),
            datasets: [
              {
                label: 'running average intake per day',
                backgroundColor: COLORS[4],
                borderColor: COLORS[4],
                pointRadius: 0,
                tension: 0.4,
                data: filteredFeedsArray.map(x => x.movingAverages.totalIntake)
              },
              {
                label: 'intake per day',
                backgroundColor: COLORS[0],
                borderColor: COLORS[0],
                pointRadius: 0,
                tension: 0.1,
                data: filteredFeedsArray.map(x => x.totalIntake)
              }
            ]
          }}
          title="Total Intake Per Day" />
        <LineChart chartData={{
          labels: filteredFeedsArray.map(x => x.date),
          datasets: [
            {
              label: 'running average of average feed amount per day',
              backgroundColor: COLORS[4],
              borderColor: COLORS[4],
              pointRadius: 0,
              tension: 0.4,
              data: filteredFeedsArray.map(x => x.movingAverages.averageFeedAmount)
            },
            {
              label: 'average feed amount',
              backgroundColor: COLORS[5],
              borderColor: COLORS[5],
              pointRadius: 0,
              tension: 0.1,
              data: filteredFeedsArray.map(x => x.averageFeedAmount)
            }
          ]
        }}
          title="Average intake per feed" />

        <LineChart
          chartData={{
            labels: filteredFeedsArray.map(x => x.date),
            datasets: [
              {
                label: 'running average number of feeds',
                backgroundColor: COLORS[4],
                borderColor: COLORS[4],
                pointRadius: 0,
                tension: 0.4,
                data: filteredFeedsArray.map(x => x.movingAverages.numberOfFeeds)
              },
              {
                label: 'number of feeds',
                backgroundColor: COLORS[3],
                borderColor: COLORS[3],
                pointRadius: 0,
                tension: 0.1,
                data: filteredFeedsArray.map(x => x.numberOfFeeds)
              }
            ]
          }
          }
          title="Feeds Per Day" />
      </div>
  </div>
}

export default FoodTracking;
