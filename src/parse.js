import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import PesukimData from "./pesukim-data.csv";
import { GuessForm } from "./components/guessForm";
import { Header } from "./components/header";
import { PasukDisplay } from "./components/pasukDisplay";
import ParshaList from "./parsha-list.txt";
import { PrevGuessList } from "./components/prevGuessLIst";

export const PassukGuesser = () => {
  const [pesukimData, setPesukimData] = useState([]);
  const [parshaList, setParshaList] = useState([]);
  const [passukText, setPassukText] = useState("");
  const [passuk, setPassuk] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerData, setAnswerData] = useState({
    sefer: "",
    parsha: "",
    perek: "",
    passukNumber: "",
  });
  const [prevGuess, setPreviousGuess] = useState([]);
  const [correctGuess, setCorrectGuess] = useState({
    sefer: false,
    parsha: false,
    perek: false,
    passukNumber: false,
  });
  const [guessCounter, setGuessCounter] = useState(0);

  useEffect(() => {
    const fetchPesukimData = async () => {
      Papa.parse(PesukimData, {
        download: true,
        delimiter: ",",
        complete: (result) => {
          setPesukimData(result.data);
        },
      });
    };
    const fetchParshaList = async () => {
      fetch(ParshaList)
        .then((r) => r.text())
        .then((text) => setParshaList(text.split(/\r?\n/)));
    };
    fetchPesukimData();
    fetchParshaList();
  }, []);

  const onPassukClick = () => {
    setShowAnswer(false);
    setAnswerData({
      sefer: "",
      parsha: "",
      perek: "",
      passukNumber: "",
    });
    setCorrectGuess({
      sefer: false,
      parsha: false,
      perek: false,
      passukNumber: false,
    });
    setGuessCounter(0);
    const passukNumber = Math.floor(Math.random() * 5840);
    const randomPassuk = pesukimData[passukNumber];
    setPassukText(randomPassuk[0]);
    setPassuk({
      sefer: randomPassuk[1],
      parsha: randomPassuk[2],
      perek: randomPassuk[3],
      passukNumber: randomPassuk[4],
    });
    setPreviousGuess([]);
  };

  const handlePrevGuess = (guess) => {
    if (correctGuess !== true) {
      setPreviousGuess([...prevGuess, guess]);
    } else {
      setPreviousGuess([]);
    }
  };

  const answer = () => {
    if (showAnswer === true) {
      return (
        <div>
          <ul>
            <li>Sefer: {passuk.sefer}</li>
            <li>Parsha: {passuk.parsha}</li>
            <li>Perek: {passuk.perek}</li>
            <li>Passuk: {passuk.passukNumber}</li>
          </ul>
        </div>
      );
    }
  };

  const handleAnswerSubmit = async (event) => {
    event.preventDefault();
    setGuessCounter(guessCounter + 1);
    handlePrevGuess(answerData);
    const clonedAnwers = answerData;
    if (JSON.stringify(answerData) === JSON.stringify(passuk)) {
      setCorrectGuess(true);
      return;
    } else {
      if (clonedAnwers.sefer === passuk.sefer) {
        setCorrectGuess((prevState) => ({ ...prevState, sefer: true }));
      } else {
        setAnswerData((prevState) => ({ ...prevState, sefer: "" }));
      }
      if (clonedAnwers.parsha === passuk.parsha) {
        setCorrectGuess((prevState) => ({ ...prevState, parsha: true }));
      } else {
        setAnswerData((prevState) => ({ ...prevState, parsha: "" }));
      }
      if (clonedAnwers.perek === passuk.perek) {
        setCorrectGuess((prevState) => ({ ...prevState, perek: true }));
      } else {
        setAnswerData((prevState) => ({ ...prevState, perek: "" }));
      }
      if (clonedAnwers.passukNumber === passuk.passukNumber) {
        setCorrectGuess((prevState) => ({ ...prevState, passukNumber: true }));
      } else {
        setAnswerData((prevState) => ({ ...prevState, passukNumber: "" }));
      }
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <Header />
      <PasukDisplay onPassukClick={onPassukClick} passukText={passukText} />
      <div style={{ margin: 20 }}>
        <GuessForm
          answerData={answerData}
          handleAnswerSubmit={handleAnswerSubmit}
          setAnswerData={setAnswerData}
          parshaList={parshaList}
          passukText={passukText}
          correctGuess={correctGuess}
          guessCounter={guessCounter}
        />
      </div>
      {/* <button onClick={() => setShowAnswer(true)}>Show Answer</button> */}
      {/* {answer()} */}
      <PrevGuessList prevGuess={prevGuess} correctGuess={correctGuess} passuk={passuk} />
    </div>
  );
};
