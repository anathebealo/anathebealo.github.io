import React, { useState } from 'react';

import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';

import { queryLinksOfPage, getRelatedPages, getRandomPage, getPageDetails } from './service';
import { isEmpty } from 'lodash';

const WikiGraph = () => {
  const [pageTitle, setPageTitle] = useState("");
  const [searchedPageTitle, setSearchedPageTitle] = useState("");
  const [relatedLinks, setRelatedLinks] = useState([]);
  const [pageDetails, setPageDetails] = useState({});
  const [linkChain, setLinkChain] = useState([]);
  const [loading, setLoading] = useState(false);

  const onTitleUpdate = (e) => {
    setPageTitle(e.target.value);
  }

  const search = async () => {
    setLoading(true);
    setLinkChain([]);
    setPageDetails({});
    setRelatedLinks([]);
    setSearchedPageTitle(pageTitle);

    const details = await getPageDetails({pageTitle});
    const links = await getRelatedPages({pageTitle});

    setPageDetails(details);
    setRelatedLinks(links.pages);
    setLinkChain([pageTitle]);
    setPageTitle("");
    setLoading(false);
  }

  const searchRandom = async () => {
    setLoading(true);
    setLinkChain([]);
    setPageDetails({});
    setRelatedLinks([]);
    setSearchedPageTitle('');
    setPageTitle("");

    const randomPage = await getRandomPage();
    const randomTitle = randomPage.title;
    const links = await getRelatedPages({ pageTitle: randomTitle });
    
    document.getElementById('wikiSearchBox').value = '';
    setLinkChain([randomTitle]);
    setSearchedPageTitle(randomTitle);
    setRelatedLinks(links.pages);
    setPageDetails(randomPage);
    setLoading(false);
  }

  const setSearch = async (pageTitle) => {
    setLoading(true);
    setLinkChain(linkChain.concat([pageTitle]));

    setPageDetails({});
    setRelatedLinks([]);
    setSearchedPageTitle('');
    setPageTitle("");

    document.getElementById('wikiSearchBox').value = pageTitle;
    const details = await getPageDetails({pageTitle});
    const links = await getRelatedPages({ pageTitle });

    setSearchedPageTitle(pageTitle);
    setRelatedLinks(links.pages);
    setPageDetails(details);
    setLoading(false);
  }

  return <div style={{ padding: '30px', display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <div style={{ display: 'flex', gap: '10px'}}>
        <input id="wikiSearchBox" type="text" name="pageTitle" size="50" onChange={onTitleUpdate}/>
        <button onClick={search}>Search</button>
        <button onClick={searchRandom}>Random</button>
      </div>
      {loading ? <div style={{ margin: '20px' }}><CircularProgress /></div> :
        !isEmpty(relatedLinks) && <div>
          <h3>{searchedPageTitle}</h3>
          <p>{pageDetails.description}</p>
            <ul>
              {relatedLinks.map(x => <Tooltip 
                title={
                  <React.Fragment>
                    {!isEmpty(x.thumbnail) && <img src={x.thumbnail.source}></img>}
                    <p>{x.description}</p>
                  </React.Fragment>
                }>
                <li key={x.titles.normalized}>
                  {x.titles.normalized} 
                  <span 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => setSearch(x.titles.normalized)}>
                    {'  '}&#x1F50D;
                  </span>
                </li>
              </Tooltip>)}
            </ul>
          </div>}
    </div>
    {!isEmpty(linkChain) ? <div style={{ color: 'grey'}}>
      <h3>Chain of Titles Viewed</h3>
      <ul>
        {linkChain.map(x => <li>{x}</li>)}
      </ul>
    </div> : null}
  </div>
}

export default WikiGraph;