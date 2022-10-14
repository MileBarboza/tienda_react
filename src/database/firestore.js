import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAPUX161I07iGE6JOS8UKJCPp247vR1Sas",
  authDomain: "tienda-react-95304.firebaseapp.com",
  projectId: "tienda-react-95304",
  storageBucket: "tienda-react-95304.appspot.com",
  messagingSenderId: "260664943362",
  appId: "1:260664943362:web:8367b9a16714eb8f29181b"
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

export async function getSingleItems(idParams){
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

export default firestore
