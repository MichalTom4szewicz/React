import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
//import ExploreContainer from "../components/ExploreContainer";
import Butt from "../components/butt";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pytajnik</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Butt />
      </IonContent>
    </IonPage>
  );
};

export default Home;
