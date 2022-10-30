import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export async function getItems() {
  const collectionRef = collection(firestore, "clothing");
  let respuesta = await getDocs(collectionRef);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleItem(idParams){
  try{
    const docRef = doc(firestore, "clothing", idParams);
    const docSnapshot = await getDoc (docRef);
    return {...docSnapshot.data(), id:docSnapshot.id}
  }catch (error){
        console.error(error);
  }
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "clothing");
  const queryCategory = query(collectionRef, where("category", "==", catParams));
  const respuesta = await getDocs(queryCategory);
  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}
 
export async function getItemsBySize(tallaParams) {
  const collectionRef = collection(firestore, "clothing");
  const querySize = query(collectionRef, where("size", "==", tallaParams));
  const respuesta = await getDocs(querySize);
  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getItemsByColor(colorsParams) {
  const collectionRef = collection(firestore, "clothing");
  const queryColor = query(collectionRef, where("color", "==", colorsParams));
  const respuesta = await getDocs(queryColor);
  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export default firestore
