import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import "./Home.css";
import {
  DeviceSecurityType,
  Vault,
  VaultType,
} from "@ionic-enterprise/identity-vault";

const vault = new Vault({
  key: "io.ionic.vault-key",
  type: VaultType.DeviceSecurity,
  deviceSecurityType: DeviceSecurityType.Both,
  lockAfterBackgrounded: 5000,
  shouldClearVaultAfterTooManyFailedAttempts: true,
  unlockVaultOnLoad: false,
});

const Home: React.FC = () => {
  const [presentAlert] = useIonAlert();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Identity Vault | Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Identity Vault | Test</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton
          onClick={() => {
            void vault.setValue("testkey", "testvalue").then(() => {
              void presentAlert("data set");
            });
          }}
        >
          Set Data
        </IonButton>
        <IonButton
          onClick={() => {
            while (1) {
              const box = document.createElement("div");
              box.id = "box" + Math.random();
              document.body.appendChild(box);
              console.log(`created div ${box.id}`);
            }
          }}
        >
          Crash
        </IonButton>
        <IonButton
          onClick={() => {
            void vault.getValue("testkey").then((value) => {
              void presentAlert(value);
            });
          }}
        >
          Get Data
        </IonButton>
        <div id="div1">The page shown at {Date.now()}.</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
