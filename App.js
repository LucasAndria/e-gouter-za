import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity } from "react-native";
import AffichageHistorique from "./components/AffichageHistorique";
import EtatCommande from "./components/EtatCommande";
import Search from "./components/Search";
import MyNavigationBar from "./components/MyNavigationBar";

import Historique from "./data/Historique";
import Data from "./data/Data";
import Liste from "./components/Liste";
import SListe from "./components/SListe";

const App = () => {

  const [selectedNav, setSelectedNav] = useState(1)

  const [Hist, setHist] = useState(Historique);

  const GP = Data.GASTRO;
  const EP = Data.EXTRA;
  const KFC = Data.KFC;
  const HK = Data.HK;

  const currentDate = () => {
    var D = new Date().getDate();
    var M = new Date().getMonth();
    var Y = new Date().getFullYear();
    var h = new Date().getHours();
    var m = new Date().getMinutes();

    D - 10 < 0 ? D = "0" + D : D = D
    M - 10 < 0 ? M = "0" + M : M = M
    h - 10 < 0 ? h = "0" + h : h = h
    m - 10 < 0 ? m = "0" + m : m = m

    const current = D + "/" + M + "/" + Y + " " + h + ":" + m;
    return (current)
  }

  const HistJ = Hist.map((h) => {
    return (h.date.split(" ")[0] === currentDate().split(" ")[0] ? h : { resto: "", lieu: "", produit: "", prix: 0, date: "08/03/2022 16:05" })
  })

  //constante pour stocker la total
  const total = Hist.reduce((currentTotal, item) => {
    return item.prix + currentTotal
  }, 0)

  const totalJour = Hist.reduce((currentTotal, item) => {
    return (item.date.split(" ")[0] === currentDate().split(" ")[0]) ? (item.prix + currentTotal) : 0
  }, 0)

  //state an'ilay commanden'ilay client
  const [commande, setCommande] = useState([])

  //fonction antsoina apres livraison
  const livrer = (g, r, p, l) => {
    setCommande({ gouter: g, resto: r, prix: p, lieu: l, etat: "Livrer" });

    setHist((prevHist) => (
      [...prevHist, ...[{ resto: r, lieu: l, produit: g, prix: p, date: currentDate() }]]
    ))
  }

  //fonction isakin'ny manao commande ny client
  const commander = (g, r, p, l, rst) => {
    setCommande({ gouter: g, resto: r, prix: p, lieu: l, etat: "en cours" })
    //Vita ny livraison apres 6 secondes
    setTimeout(() => livrer(g, r, p, l), 3000);
  }

  //resultats ho listena isakin'ny manao recherche
  const [results, setResults] = useState([])
  const [searchVal, setSearchVal] = useState("")

  //fonction rechercher
  const search = (s) => {

    setSearchVal(s)
    //intialiser resultats
    setResults([])
    s && (
      GP.stock.forEach(produit => {
        if (produit.gouter.toLowerCase().includes(s.toLowerCase())) {
          return (
            setResults(prevRes => [...prevRes, ...[
              { key: prevRes.length + 1, prix: produit.prix, resto: GP.nom, img: produit.img, gouter: produit.gouter, details: produit.details },
            ]])
          )
        }
      }),
      EP.stock.forEach(produit => {
        if (produit.gouter.toLowerCase().includes(s.toLowerCase())) {
          return (
            setResults(prevRes => [...prevRes, ...[
              { key: prevRes.length + 1, prix: produit.prix, resto: EP.nom, img: produit.img, gouter: produit.gouter, details: produit.details },
            ]])
          )
        }
      }),
      KFC.stock.forEach(produit => {
        if (produit.gouter.toLowerCase().includes(s.toLowerCase())) {
          return (
            setResults(prevRes => [...prevRes, ...[
              { key: prevRes.length + 1, prix: produit.prix, resto: KFC.nom, img: produit.img, gouter: produit.gouter, details: produit.details },
            ]])
          )
        }
      }),
      HK.stock.forEach(produit => {
        if (produit.gouter.toLowerCase().includes(s.toLowerCase())) {
          return (
            setResults(prevRes => [...prevRes, ...[
              { key: prevRes.length + 1, prix: produit.prix, resto: HK.nom, img: produit.img, gouter: produit.gouter, details: produit.details },
            ]])
          )
        }
      })
    )
  }

  const selectResto = (d) => {
    setResults([])
    setSearchVal(d)
    d === "GP" && (
      GP.stock.forEach(produit => {
        setResults(prevRes => [...prevRes, ...[
          { key: prevRes.length + 1, prix: produit.prix, resto: GP.nom, img: produit.img, gouter: produit.gouter, details: produit.details },
        ]])
      })
    )
    d === "EP" && (
      EP.stock.forEach(produit => {
        setResults(prevRes => [...prevRes, ...[
          { key: prevRes.length + 1, prix: produit.prix, resto: EP.nom, img: produit.img, gouter: produit.gouter, details: produit.details },
        ]])
      })
    )
    d === "KFC" && (
      KFC.stock.forEach(produit => {
        setResults(prevRes => [...prevRes, ...[
          { key: prevRes.length + 1, prix: produit.prix, resto: KFC.nom, img: produit.img, gouter: produit.gouter, details: produit.details },
        ]])
      })
    )
    d === "HK" && (
      HK.stock.forEach(produit => {
        setResults(prevRes => [...prevRes, ...[
          { key: prevRes.length + 1, prix: produit.prix, resto: HK.nom, img: produit.img, gouter: produit.gouter, details: produit.details },
        ]])
      })
    )
  }



  const selectNav = (n) => {
    setSelectedNav(n)
    setResults([])
    setSearchVal('')
  }
  const [show, setShow] = useState(false)

  const hideHist = () => {
    setShow(false)
  }

  const showHist = () => {
    setShow(true)
  }

  return (
    <View style={styles.container}>

      {<MyNavigationBar selectNav={selectNav} />}
      {selectedNav === 1 && (
        <View>
          <EtatCommande show={show} hideHist={hideHist} gouter={commande.gouter} resto={commande.resto} etat={commande.etat} lieu={commande.lieu} />
          <Search search={search} />
          {searchVal === "" ? <Liste selectResto={selectResto} /> : <SListe showHist={showHist} results={results} funcCommande={commander} />}
        </View>
      )}
      {selectedNav === 2 && <AffichageHistorique hists={Hist} total={total} />}
      {selectedNav === 3 && <AffichageHistorique hists={HistJ} total={totalJour} />}
    </View >


  );
};

const styles = StyleSheet.create({

  container: {
    marginTop: 0,
    padding: 0,
  },
  ButtonListPrix: {
    color: 'white',
  },
  ButtonListResto: {
    color: 'white',
  },
  ButtonListTitre: {
    flex: 2,
    color: 'white',
  },
});

export default App;