[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1WQqteTv)

Teodor Jakovljevic RN 96/22


Route:

1. Palacinka 

.get() - dohvata sve palacinke iz baze podataka
.get(id) - dohvata palacinku sa zadatim parametrom
.put(id) - menja vrednosti palacinke pod datim id-ijem, podaci se uzimaju iz json body-ja
.post() - pravi novu palacinku u bazi podataka =>   
{
    id: int, req,
    naziv: string, req,
    opis: string,
    cena: int, req,
    kategorija_id: int, req
}
.delete(id) - brise palacinku pod datim id-ijem iz baze podataka


2. Narudzbina 

.get() - dohvata sve narudzbine iz baze podataka
.get(id) - dohvata narudzbinu sa zadatim parametrom
.put(id) - menja vrednosti narudzbine pod datim id-ijem, podaci se uzimaju iz json body-ja
.post() - pravi novu narudzbinu u bazi podataka =>   
{
    id: int, req,
    vreme_narucivanja; date, req,
    zakazano_vreme: date, req,
    status: string, req,
    adresa: string, req,
    telefon: string, req,
    ime_prezime: string, req,
}
.delete(id) - brise narudzbinu pod datim id-ijem iz baze podataka


3. Kategorija

.get() - dohvata sve kategorije iz baze podataka
.get(id) - dohvata kategoriju sa zadatim parametrom
.put(id) - menja vrednosti kategorije pod datim id-ijem, podaci se uzimaju iz json body-ja
.post() - pravi novu kategoriju u bazi podataka =>   
{
    id: int, req,
    naziv: string, req
}
.delete(id) - brise kategoriju pod datim id-ijem iz baze podataka


4. Sastojak

.get() - dohvata sve sastojke iz baze podataka
.get(id) - dohvata sastojak sa zadatim parametrom
.put(id) - menja vrednosti sastojka pod datim id-ijem, podaci se uzimaju iz json body-ja
.post() - pravi novi sastojak u bazi podataka =>   
{
    id: int, req,
    naziv: string, req
}
.delete(id) - brise sastojak pod datim id-ijem iz baze podataka


5. PalacinkaSastojak

.get() - dohvata sve kombinacije palacinki i sastojaka iz baze podataka
.get(id) - dohvata kombinacije sa zadatim parametrom
.put(id) - menja vrednosti kombinacije pod datim id-ijem, podaci se uzimaju iz json body-ja
.post() - pravi novu kombinaciju u bazi podataka =>   
{
    id: int, req,
    palacinka_id: int, req,
    sastojak_id: int, req
}
.delete(id) - brise kombinaciju pod datim id-ijem iz baze podataka


6. StavkaNarudzbine

.get() - dohvata sve kombinacije palacinki i narudzbina iz baze podataka
.get(id) - dohvata kombinacije sa zadatim parametrom
.put(id) - menja vrednosti kombinacije pod datim id-ijem, podaci se uzimaju iz json body-ja
.post() - pravi novu kombinaciju u bazi podataka =>   
{
    id: int, req,
    palacinka_id: int, req,
    narudzbina: int, req
    komada: int, req,
    jedinicna_cena: int, req
}
.delete(id) - brise kombinaciju pod datim id-ijem iz baze podataka
