import { useState, useEffect, useCallback, useRef } from 'react';
import './greedyGame.css';
import cloneDeep from 'lodash/cloneDeep';
import { isEmpty } from 'lodash';

const UP = 'ArrowUp';
const DOWN = 'ArrowDown';
const LEFT = 'ArrowLeft';
const RIGHT = 'ArrowRight';

const minNum = 1;
const maxNum = 9;
const boardWidth = 25; 
const boardHeight = 45;
const squareColors = ['cursor', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'pink', 'gray'];

const GreedyGame = () => {
  const [board, _setBoard] = useState([]);
  const [cursorX, _setCursorX] = useState(0);
  const [cursorY, _setCursorY] = useState(0);
  const [score, _setScore] = useState(0);
  const [gameIsOver, _setGameIsOver] = useState(false);
  const [youLost, setYouLost] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const boardRef = useRef(board);
  const setBoard = data => {
    boardRef.current = data;
    _setBoard(data);
  };

  const cursorXRef = useRef(cursorX);
  const setCursorX = data => {
    cursorXRef.current = data;
    _setCursorX(data);
  };
  const cursorYRef = useRef(cursorY);
  const setCursorY = data => {
    cursorYRef.current = data;
    _setCursorY(data);
  };
  
  const gameIsOverRef = useRef(gameIsOver);
  const setGameIsOver = data => {
    gameIsOverRef.current = data;
    _setGameIsOver(data);
  };

  const scoreRef = useRef(score);
  const setScore = data => {
    scoreRef.current = data;
    _setScore(data);
  };

  const makeNewBoard = useCallback(() => {
    const tempBoard = [];
    let row = [];
    for (let i = 0; i < boardWidth; i++) {
      for (let j = 0; j < boardHeight; j++) {
        row.push(Math.floor(Math.random() * (maxNum - minNum + 1) + minNum));
      }
      tempBoard.push(row.slice());
      row = [];
    }
    const tempCursorX = Math.floor(Math.random() * boardWidth);
    const tempCursorY = Math.floor(Math.random() * boardHeight)
    tempBoard[tempCursorX][tempCursorY] = '*';

    setCursorX(tempCursorX);
    setCursorY(tempCursorY);
    setBoard(tempBoard);
    setLoadingScreen(false);
  }, []);

  const restartGame = () => {
    setGameIsOver(false);
    setYouLost(false);
    window.removeEventListener('keydown', eventListener, false);
    setBoard([]);
    setLoadingScreen(true);
  }

  const youLose = useCallback(() => {
    setGameIsOver(true);
    setYouLost(true);
    window.removeEventListener('keydown', eventListener, false);
  }, [eventListener]);

  const isMoveValid = useCallback((x, y) => {
    const tempBoard = cloneDeep(boardRef.current);
    const tempCursorX = cursorXRef.current;
    const tempCursorY = cursorYRef.current;

    if(tempCursorX + x >= tempBoard.length || 
      tempCursorY + y >= tempBoard[0].length || 
      tempCursorX + x < 0 || 
      tempCursorY + y < 0 ) {
        return false;
      }

    let x1 = tempCursorX;
    let x2 = x1 + x * (tempBoard[tempCursorX + x][tempCursorY + y]);
    let y1 = tempCursorY;
    let y2 = y1 + y * (tempBoard[tempCursorX + x][tempCursorY + y]);

    if (tempBoard[tempCursorX + x][tempCursorY + y] !== -1) {
      if (tempCursorX + x * (tempBoard[tempCursorX + x][tempCursorY + y]) >= 0 && tempCursorX + x * (tempBoard[tempCursorX + x][tempCursorY + y]) < boardWidth &&
          tempCursorY + y * (tempBoard[tempCursorX + x][tempCursorY + y]) >= 0 && tempCursorY + y * (tempBoard[tempCursorX + x][tempCursorY + y]) < boardHeight) {
        if (x1 !== x2) {
          if (x1 < x2) {
            for (let i = x1; i <= x2; i++) {
              if (tempBoard[i][y1] === -1) {
                return false;
              }
            }
          } else {
            for (let i = x1; i >= x2; i--) {
              if (tempBoard[i][y1] === -1) {
                return false;
              }
            }
          }
        } else if (y1 !== y2) {
          if (y1 < y2) {
            for (let i = y1; i <= y2; i++) {
              if (tempBoard[x1][i] === -1) {
                return false;
              }
            }
          } else {
            for (let i = y1; i >= y2; i--) {
              if (tempBoard[x1][i] === -1) {
                return false;
              }
            }
          }
        }
        return true;
      }
      return false;
    }
    return true;
  }, []);

  const makeMove = useCallback((x, y) => {
    const tempBoard = cloneDeep(boardRef.current);
    const tempCursorX = cursorXRef.current;
    const tempCursorY = cursorYRef.current;

    let x1 = tempCursorX;
    let x2 = x1 + x * (tempBoard[tempCursorX + x][tempCursorY + y]);
    let y1 = tempCursorY;
    let y2 = y1 + y * (tempBoard[tempCursorX + x][tempCursorY + y]);

    if (tempBoard[tempCursorX + x][tempCursorY + y] !== -1) {
      setScore(scoreRef.current + tempBoard[tempCursorX + x][tempCursorY + y]);
      if (x1 !== x2) {
        if (x1 < x2) {
          for (let i = x1; i < x2; i++) {
            tempBoard[i][y1] = -1;
          }
          setCursorX(x2);
          setCursorY(y1);
        } else {
          for (let i = x1; i > x2; i--) {
            tempBoard[i][y1] = -1;
          }
          setCursorX(x2);
          setCursorY(y1);
        }
      } else if (y1 !== y2) {
        if (y1 < y2) {
          for (let i = y1; i < y2; i++) {
            tempBoard[x1][i] = -1;
          }
          setCursorX(x1);
          setCursorY(y2);
        } else {
          for (let i = y1; i > y2; i--) {
            tempBoard[x1][i] = -1;
          }
          setCursorX(x1);
          setCursorY(y2);
        }
      }
    }
    setBoard(tempBoard);
  }, []);
  
  const eventListener = useCallback((event) => {
    if(gameIsOverRef.current) {
      return;
    }

    switch (event.code) {
      case UP:
        event.preventDefault();
        if (isMoveValid(-1, 0)) {
          makeMove(-1, 0);
        } else {
          youLose();
        }
        break;
      case DOWN:
        event.preventDefault();
        if (isMoveValid(1, 0)) {
          makeMove(1, 0);
        } else {
          youLose();
        }
        break;
      case LEFT:
        if (isMoveValid(0, -1)) {
          makeMove(0, -1);
        } else {
          youLose();
        }
        break;
      case RIGHT:
        if (isMoveValid(0, 1)) {
          makeMove(0, 1);
        } else {
          youLose();
        }
        break;
      default:
        break;
    }
  }, [isMoveValid, makeMove, youLose]);

  const initializeGame = useCallback(() => {
    makeNewBoard();
    setGameIsOver(false);
    setYouLost(false);
    setScore(0);
    window.addEventListener('keydown', eventListener, false);
  }, [makeNewBoard, eventListener]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  return <div className="greedyGame">
    <h1> Clear the Board!</h1>
    <div className="buttons">
      <button id="startGame" type="button" onClick={() => initializeGame()}> Start Game! </button>
      <button id="restartGame" disabled={gameIsOver} type="button" onClick={() => restartGame()}> Restart </button>
    </div>
    <br />
    <div className="gameboard">
      {gameIsOver && youLost 
        ? <div id="loser" style={{backgroundColor: "#ff8080" }}><p>You Lost! Click restart to try again! Score: {Math.round(score / (boardWidth * boardHeight) * 1000) / 10}%</p></div> 
        : !loadingScreen ? <div id="loser" style={{backgroundColor: "#66ffb3"}}> <p>Score: <strong>{Math.round(score / (boardWidth * boardHeight) * 1000) / 10}%</strong></p></div> : null}
      <br />
      {/* {!loadingScreen && !gameIsOver && !youLost && <div id="loser" style={{backgroundColor: "#66ffb3"}}> <p>Score: <strong>{Math.round(score / (boardWidth * boardHeight) * 1000) / 10}%</strong></p></div>} */}
      <div id="board">{!isEmpty(board) 
        ? <table><tbody>
             {board.map((row, i) => <tr id={i}>
                { board[0].map((cell, j) => { 
                  let id= `${i}+${j}`;
                  return i !== cursorX || j !== cursorY
                    ? board[i][j] === -1 
                      ? <td id={id} className='empty'><div> </div></td> 
                      : <td id={id} className={squareColors[board[i][j]]}>{board[i][j]}</td> 
                    : <td id='cursor'> <div> </div> </td>
                  })
                }
             </tr>)}
            </tbody></table>
        : null}
      </div>
    </div>

    <h4> Instructions </h4>
    <p>
      Goal: clear all of the squares on the board <br />
      Use the arrow keys to move up, down, left or right <br />
      When you go in a direction, you will clear the number of blocks noted by the square in that direction <br />
      You cannot go in a direction if the number in the square is larger than the distance to the nearest edge or empty space <br />

    </p>
  </div>
}

export default GreedyGame;