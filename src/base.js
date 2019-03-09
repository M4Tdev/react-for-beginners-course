import Rebase from 're-base';
import firebase from 'firebase';

const firebaseAPP = firebase.initializeApp({
  apiKey: 'AIzaSyCbJanqh5vkcI-Ot3Tb3riRlOMs20DBKBo',
  authDomain: 'catch-of-the-day-m4t.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-m4t.firebaseio.com',
});

const base = Rebase.createClass(firebaseAPP.database());

export { firebaseAPP };

export default base;
