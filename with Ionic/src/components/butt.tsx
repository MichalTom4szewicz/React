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

import { IonContent, IonButton } from "@ionic/react";
import "./butt.css";

import {
  IonList,
  IonRadioGroup,
  IonListHeader,
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
      return "warning";
    } else if (subb !== 0) {
      return "success";
    }
  }

  render() {
    return (
      <IonContent>
        <IonList>
          <IonRadioGroup>
            <IonListHeader>
              <IonLabel>"tresc pytania"</IonLabel>
            </IonListHeader>

            <IonItem color={this.wyborKoloru(1)}>
              <IonLabel>Biff</IonLabel>
              <IonRadio
                onClick={() => this.choice1()}
                id="c1"
                slot="start"
                value="1"
              />
            </IonItem>

            <IonItem color={this.wyborKoloru(2)}>
              <IonLabel>Griff</IonLabel>
              <IonRadio
                onClick={() => this.choice2()}
                id="c2"
                slot="start"
                value="2"
              />
            </IonItem>

            <IonItem color={this.wyborKoloru(3)}>
              <IonLabel>Buford</IonLabel>
              <IonRadio
                onClick={() => this.choice3()}
                id="c3"
                slot="start"
                value="3"
              />
            </IonItem>
          </IonRadioGroup>
        </IonList>

        <div id="ee">
          <IonButton id="sub" color="light" onClick={() => this.submit()}>
            Submit
          </IonButton>
        </div>
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
        subb: this.state.choice
      };
    });

    if (this.state.popr === this.state.choice) {
      //document.getElementById("c" + this.state.choice)!.style.background =        "green";

      console.log(this.state.choice + " yaaaay");
    } else {
      document.getElementById("c" + this.state.choice)!.style.background =
        "white";
      console.log(this.state.choice + " false");
    }
  }

  choice1() {
    document.getElementById("sub")!.style.display = "block";

    document.getElementById("c1")!.style.background = "white";
    document.getElementById("c2")!.style.background = "white";
    document.getElementById("c3")!.style.background = "white";

    this.setState(() => {
      return {
        choice: 1
      };
    });

    //console.log(this.state.choice);
  }

  choice2() {
    document.getElementById("sub")!.style.display = "block";

    document.getElementById("c1")!.style.background = "white";
    document.getElementById("c2")!.style.background = "white";
    document.getElementById("c3")!.style.background = "white";

    this.setState(() => {
      return {
        choice: 2
      };
    });
    //console.log(this.state.choice);
  }

  choice3() {
    document.getElementById("sub")!.style.display = "block";

    document.getElementById("c1")!.style.background = "white";
    document.getElementById("c2")!.style.background = "white";
    document.getElementById("c3")!.style.background = "white";

    this.setState(() => {
      return {
        choice: 3
      };
    });
    //console.log(this.state.choice);
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
