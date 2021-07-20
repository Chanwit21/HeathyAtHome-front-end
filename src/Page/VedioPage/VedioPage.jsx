import React from "react";
import FooterComponent from "../../Component/FooterComponent/FooterComponent";
import NavComponent from "../../Component/NavComponent/NavComponent";
import "./VedioPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function VedioPage() {
  const [onPlayOrPause, setonPlayOrPause] = useState("play");
  function togglePlayPause() {
    setonPlayOrPause(onPlayOrPause === "play" ? "pause" : "play");
  }

  return (
    <div>
      <NavComponent />
      <div style={{ paddingTop: "3.125vw", with: "100%" }}></div>
      <div className="vedio-page">
        <section className="vedio-player">
          <div className="container">
            <div className="row-of-vedio-player">
              <div className="vedio-player-box">
                <h1>MOUNTAIN CLIMBER</h1>
                <iframe
                  width="75%"
                  height="75%"
                  src="https://www.youtube.com/embed/wQq3ybaLZeA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div className="button-play-pause">
                  <button>
                    <img src="./PIC/Icon/rewind-button.png" alt="rewind" />
                  </button>
                  <button
                    onClick={() => togglePlayPause()}
                    style={{ display: onPlayOrPause === "play" ? "" : "none" }}
                  >
                    <img src="./PIC/Icon/play-button.png" alt="Play" />
                  </button>
                  <button
                    onClick={() => togglePlayPause()}
                    style={{ display: onPlayOrPause === "pause" ? "" : "none" }}
                  >
                    <img src="./PIC/Icon/pause-button.png" alt="Pause" />
                  </button>
                  <button>
                    <img src="./PIC/Icon/forward-button.png" alt="forward" />
                  </button>
                </div>
              </div>
              <div className="go-to-workout-page">
                <Link to="/user-workout-schedule-page">
                  <div className="go-to-workout-page-box">
                    <h1>Go to Workout Page</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ marginBottom: "2.083333333333333vw" }}></div>
      <FooterComponent />
    </div>
  );
}

export default VedioPage;
