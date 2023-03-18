import React from "react";

export const GuessForm = (props) => {
  const handleBorderColor = (input) => {
    if (props.guessCounter !== 0) {
      if (props.correctGuess[input] === true || props.correctGuess === true) {
        return "lightgreen";
      } else {
        return "red";
      }
    } else return "grey";
  };

  return (
    <form onSubmit={props.handleAnswerSubmit}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <datalist id="seferList">
          <option value="בראשית">בראשית</option>
          <option value="שמות">שמות</option>
          <option value="ויקרא">ויקרא</option>
          <option value="במדבר">במדבר</option>
          <option value="דברים">דברים</option>
        </datalist>
        <datalist id="parshaList">
          {props.parshaList.map((parsha) => (
            <option key={parsha} value={parsha}>
              {parsha}
            </option>
          ))}
        </datalist>
        <input
          id="sefer"
          name="sefer"
          list="seferList"
          value={props.answerData.sefer}
          style={{ width: 150, borderColor: handleBorderColor("sefer") }}
          onChange={(event) =>
            props.setAnswerData({ ...props.answerData, sefer: event.target.value })
          }
          placeholder="Sefer"
          autoComplete="off"
          required
        />
        <br></br>
        <input
          id="parsha"
          name="parsha"
          list="parshaList"
          value={props.answerData.parsha}
          style={{ width: 150, borderColor: handleBorderColor("parsha") }}
          onChange={(event) =>
            props.setAnswerData({ ...props.answerData, parsha: event.target.value })
          }
          placeholder="Parsha"
          autoComplete="off"
          required
        />
        <br></br>
        <input
          type="number"
          id="perek"
          name="perek"
          min='1'
          max='50'
          value={props.answerData.perek}
          style={{ width: 150, borderColor: handleBorderColor("perek") }}
          onChange={(event) =>
            props.setAnswerData({ ...props.answerData, perek: event.target.value })
          }
          placeholder="Perek"
          autoComplete="off"
          required
        />
        <br></br>
        <input
          type="number"
          id="passukNumber"
          name="passukNumber"
          value={props.answerData.passukNumber}
          style={{ width: 150, borderColor: handleBorderColor("passukNumber") }}
          onChange={(event) =>
            props.setAnswerData({ ...props.answerData, passukNumber: event.target.value })
          }
          placeholder="Passuk"
          autoComplete="off"
          required
        />
        <br></br>
      </div>
      <div style={{ margin: 20, textAlign: "center" }}>
        <input
          type="submit"
          value="Guess!"
          disabled={props.passukText === "" || props.guessCounter > 4 ? true : false}
        />
      </div>
    </form>
  );
};
