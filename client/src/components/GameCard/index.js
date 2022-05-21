import React from "react";
import { Link } from "react-router-dom";
import Card from "../GameCard/index";

export default function GameCard(props) {
  const cardStyle = {
    width: "18rem",
    border: "solid grey 5px",
    padding: "20px",
    margin: "30px",
  };

  //button will be used
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <h5 className="card-title">{props.title}</h5>
        <img className="card-img-top" src={props.coverArt} alt="Card cap" />
        <div className="card-body">
          <p>Completed Achievements: {props.currentAchievements}</p>
          <p>
            Gamerscore: {props.currentGamerScore} / {props.totalGamerScore}
          </p>
          <p>Percent Complete: {props.percentAchieve}%</p>
          <Link to={`/compare/${props.titleId}`}>Check My Stats</Link>
        </div>
      </div>
    </div>
  );
}

//   return (
//     <Row xs={1} md={3} className="g-6">
//       {Array.from({ length: 1 }).map((_, idx) => (
//         <Col>
//           <Card style={cardStyle}>
//             <Card.Img variant="top" src={props.coverArt} />
//             <Card.Body>
//               <Card.Title>{props.title}</Card.Title>
//               <Card.Text>
//                 <p>Completed Achievements: {props.currentAchievements}</p>
//                 <p>
//                   Gamerscore: {props.currentGamerScore} /{" "}
//                   {props.totalGamerScore}
//                 </p>
//                 <p>Percent Complete: {props.percentAchieve}%</p>
//               </Card.Text>
//               <Link to={`/compare/${props.titleId}`}>Check My Stats</Link>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }
