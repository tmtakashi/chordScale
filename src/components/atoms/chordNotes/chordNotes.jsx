import React, { useEffect } from "react";
import Vex from "vexflow";
import styles from "./chordNotes.module.css";

const ChordNotes = props => {
  useEffect(() => {
    document.getElementById("chordNotes").innerHTML = "";
    var vf = new Vex.Flow.Factory({
      renderer: { elementId: "chordNotes", width: 220, height: 150 }
    });
    var score = vf.EasyScore();
    var system = vf.System();
    system
      .addStave({
        voices: [score.voice(score.notes(`(${props.notes.join(" ")})/w`))]
      })
      .addClef("treble");

    vf.draw();
  });
  return <div className={styles.chordNotesWrapper} id="chordNotes"></div>;
};

export default ChordNotes;