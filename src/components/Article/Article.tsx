import styles from '../../style/styles.module.scss';
import Vision from "../Vision/Vision";
import People from "../People/People";
import Sponsors from "../Sponsors/Sponsors";
import Helpus from "../Help/Helpus";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function Article() {
  return (
	  <article className={styles.article}>
		<Routes>
		  <Route path='/'
				 element={<Vision/>}></Route>
		  <Route path='/ppl'
				 element={<People/>}></Route>
		  <Route path='/sponsors'
				 element={<Sponsors/>}></Route>
		  <Route path='/helpus'
				 element={<Helpus/>}></Route>
		</Routes>
	  </article>
  )
}

export default Article;
