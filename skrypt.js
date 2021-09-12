function myFunction() {

function obliczanieKorekty(poziomCukru, wrazliwoscNaInsuline, poziomDocelowy) {
    var spadek = poziomCukru - poziomDocelowy;
    var korekta = 0;
    var sprawdzenie = 0;
    while (sprawdzenie <= spadek) {
        sprawdzenie = korekta * wrazliwoscNaInsuline;
        korekta = korekta + 0.0009;
    }
	iloscKorektyDoPodania = Math.round(korekta * 100) / 100;
    return iloscKorektyDoPodania;
}

function obliczanieIlosciInsulinyNaPosilek(iloscKCAL, przelicznik) {
	var wynik = iloscKCAL * przelicznik / 100;
    var wynik = Math.round(wynik * 100) / 100;
	return wynik;
}

var poziomCukru = prompt("Wprowdź twój aktualny poziom cukru");
var wrazliwoscNaInsuline = prompt("Wprowadź twoją aktualną wrażliwość na insulinę");
var poziomDocelowy = prompt("Wprowadź docelową wartość poziomu cukru");
var iloscKCAL = prompt("Wprowadź ilość kalorii jaką chcesz zjeść");
var przelicznik = prompt("Wprowadź swój przelicznik");

var korektaNaPosilek = obliczanieKorekty(poziomCukru, wrazliwoscNaInsuline, poziomDocelowy);
var bolusNaPosilek = obliczanieIlosciInsulinyNaPosilek(iloscKCAL, przelicznik);
var iloscInsulinyDoPodania = korektaNaPosilek + bolusNaPosilek;
var iloscInsulinyDoPodania = Math.round(iloscInsulinyDoPodania * 100) / 100;

pass.value = `Musisz podać ${iloscInsulinyDoPodania} j.`;
alert(`Na posiłek musisz podać ${korektaNaPosilek} jednostek a korekty musisz podać ${bolusNaPosilek} jednostek razem musisz podać ${iloscInsulinyDoPodania} jednostek insuliny`)

}

function myFunction2() {

function obliczanieKorekty(poziomCukru, wrazliwoscNaInsuline, poziomDocelowy) {
    var spadek = poziomCukru - poziomDocelowy;
    var korekta = 0;
    var sprawdzenie = 0;
    while (sprawdzenie <= spadek) {
        sprawdzenie = korekta * wrazliwoscNaInsuline;
        korekta = korekta + 0.0009;
    }
	iloscKorektyDoPodania = Math.round(korekta * 100) / 100;
    return iloscKorektyDoPodania;
}

var poziomCukru = prompt("Wprowdź twój aktualny poziom cukru");
var wrazliwoscNaInsuline = prompt("Wprowadź twoją aktualną wrażliwość na insulinę");
var poziomDocelowy = prompt("Wprowadź docelową wartość poziomu cukru");

var iloscKorekty = obliczanieKorekty(poziomCukru, wrazliwoscNaInsuline, poziomDocelowy);
pass.value = `Musisz podać ${iloscKorekty} j.`;
alert(`Musisz podać ${iloscKorekty} jednostek korekty`)

}