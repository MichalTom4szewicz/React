/*import React, { useState } from "react";
import { IonContent, IonButton } from "@ionic/react";

interface ContainerProps {}

const Butt: React.FC<ContainerProps> = () => {
  let [text = "hejka"] = useState(false);
  return (
    <IonContent>
      <IonButton
        onClick={() => {
          text = "fdsfsd";
        }}
      >
        {text}
      </IonButton>
    </IonContent>
  );
};

export default Butt;
*/
import React, { Component } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  //IonCardSubtitle,
  IonCardTitle
} from "@ionic/react";

import { IonMenu, IonHeader, IonToolbar, IonTitle } from "@ionic/react";

import { IonContent, IonButton } from "@ionic/react";
import "./butt.css";

import {
  IonList,
  IonRadioGroup,
  //IonListHeader,
  IonLabel,
  IonItem,
  IonRadio
} from "@ionic/react";
//import { withRouter } from "react-router";

class Butt extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: "clickme",
      count: 0,
      choice: 0,
      subb: 0,
      ed: false,
      popr: 1
    };

    this.submit = this.submit.bind(this);
  }

  wyborKoloru(arg: number) {
    const subb = this.state.subb;
    const popr = this.state.popr;

    if (arg !== popr && subb !== arg) {
      return "white";
    } else if (arg !== this.state.popr && subb !== 0) {
      return "danger";
    } else if (subb !== 0) {
      return "success";
    }
  }

  choice(arg: number) {
    document.getElementById("sub")!.style.display = "block";

    this.setState(() => {
      return {
        choice: arg
      };
    });

    //console.log(this.state.choice);
  }

  render() {
    return (
      <IonContent>
        <IonCard id="card">
          <IonCardHeader>
            <IonCardTitle>Question x/y</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
            <IonList>
              <IonRadioGroup>
                <IonItem color={this.wyborKoloru(1)}>
                  <IonLabel class="ion-text-wrap">
                    Her extensive perceived may any sincerity extremity. Indeed
                    add rather may pretty see. Old propriety delighted explained
                  </IonLabel>
                  <IonRadio
                    class="item-text-wrap"
                    onClick={() => this.choice(1)}
                    id="c1"
                    slot="start"
                    value="1"
                  />
                </IonItem>

                <IonItem color={this.wyborKoloru(2)}>
                  <IonLabel class="ion-text-wrap">
                    perceived otherwise objection saw ten her. Doubt merit sir
                    the right these alone keeps. By sometimes intention smallnes
                  </IonLabel>
                  <IonRadio
                    onClick={() => this.choice(2)}
                    id="c2"
                    slot="start"
                    value="2"
                  />
                </IonItem>

                <IonItem color={this.wyborKoloru(3)}>
                  <IonLabel class="ion-text-wrap">
                    Sportsman do offending supported extremity breakfast by
                    listening. Decisively advantages nor expression
                  </IonLabel>
                  <IonRadio
                    onClick={() => this.choice(3)}
                    id="c3"
                    slot="start"
                    value="3"
                  />
                </IonItem>
              </IonRadioGroup>
            </IonList>
            <IonButton
              class="ion-text-center"
              id="sub"
              color="light"
              onClick={() => this.submit()}
              hidden={this.state.ed === true ? true : false}
            >
              Submit
            </IonButton>
            <IonButton
              class="ion-text-center"
              color="primary"
              id="next"
              hidden={this.state.ed === true ? false : true}
            >
              Next Question
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    );
  }
  /*onClick={() => this.choice1()
    
    <IonButton onClick={() => this.changeText()}>
          {this.state.text}
        </IonButton>
        <p>{this.state.count}</p>

        <IonButton onClick={() => this.countInc()}>Up</IonButton>
        <IonButton onClick={() => this.countDec()}>Down</IonButton>
    
    */

  submit() {
    this.setState(() => {
      return {
        subb: this.state.choice,
        ed: true
      };
    });
  }

  changeText() {
    this.setState(() => {
      return {
        text: "hejka!"
      };
    });
  }

  countInc() {
    this.setState((prv: { count: number }) => {
      return {
        count: prv.count + 1
      };
    });
  }

  countDec() {
    this.setState((prv: { count: number }) => {
      return {
        count: prv.count === 0 ? 0 : prv.count - 1
      };
    });
  }
}

export default Butt;
