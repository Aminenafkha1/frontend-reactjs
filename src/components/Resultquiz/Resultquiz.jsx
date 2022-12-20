import React from "react";
import img from "../../assets/images/quiz.png";
import circle from "../../assets/images/circleicon.svg";
import { Carousel } from "react-responsive-carousel";
const Resultquiz = () => {
  return (
 
    

    <div className="resultQuiz">
      <h1>How does your best friend usually describe you?</h1>
      <img src={img} alt="" />
      <div className="answersQuiz">
        <div className="answerItem">
          <div className="answerCheck green-answer">
             <img src={circle} alt="" />

          </div>
          <div className="answerText">
          How does your best friend usually describe you 
            How does your best friend usually describe you 
            How does your best friend usually describe you 
          </div>
        </div>
        <div className="answerItem">
          <div className="answerCheck"></div>
          <div className="answerText">
          How does your best friend usually describe you 
          
          </div>
        </div>
        <div className="answerItem">
          <div className="answerCheck"></div>
          <div className="answerText">
            How does your best friend usually describe you 
            How does your best friend usually describe you 
            How does your best friend usually describe you 
          </div>
        </div>
      </div>

      <div className="paginateQuiz">
        1/15
      </div>


      <Carousel>
                <div>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
    
    
  );
};

export default Resultquiz;
