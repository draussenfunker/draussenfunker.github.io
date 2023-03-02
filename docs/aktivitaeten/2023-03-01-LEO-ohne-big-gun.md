---
title: Satellitenbetrieb ohne große Ausrüstung
description: 
    Jörg, DJ7NT, beschreibt, wie einfach der Amateurfunkbetrieb über LEO (Low Earth Orbit) Satelliten mit einem einfachen Handfunkgerät sein kann.
type: activity
image: /aktivitaeten/LEO-2023-03-01/230301_leo.jpg
features:
 - SATELLITEN
---

# Kochrezept für eine LEO-Aktivierung mit Low-Cost-Equipment

Aufmerksam geworden, durch Experimente von DO7OO im [Disord der draussenfunker.de](https://discord.gg/B6BkdcTQ87) der mir erzählte, dass er LEO-SATs ohne „Big-Gun-Equipment“ macht, bin ich neugierig geworden, wie das gehen mag. Daraus entstanden ist das folgende - durch DO7OO und mich erfolgreich erprobte - Kochrezept:


## Zutaten
- Billiges FM-Handfunkgerät (Radioddity, Baofeng, …)
- Mobiltelefon
- App zum SAT-Tracken. Bspw. den „ISS-Detektor“
- Eine Portion Glück

## Zubereitung

1. SAT-Tracking App installieren. Bspw. den „ISS-Detektor“. 
- [Geschmacksrichtung Apple](https://apps.apple.com/de/app/iss-detector/id1198597805)
- [Geschmacksrichtung Android](https://play.google.com/store/apps/details?id=com.runar.issdetector&hl=de&gl=US)

2. App einrichten und auf einen SAT Filtern, der V/U im FM-Mode unterstützt und der noch aktiv ist. Ich habe mich für OSCAR-50 (SO-50 oder auch Saudisat-1C) entschieden

3. In der App die Frequenzen für Up/Downlink sowie mögliche CTCSS-Töne heraussuchen. Am Beispiel SO-50:
    Uplink: 145.850 kHz
    Downlink: 436.805 kHz
    CTCSS Ton #1 zum „Aktivieren des Transponders“: 67Hz
    CTCSS Ton #2 für einen Durchgang: 74.4Hz

### Etwas Theorie

Nun etwas Theorie. Ganz ohne geht es nicht:

So ein LEO-Sat umkreist die Erde in gerade einmal 100Minuten. Das bedeutet: Er ist verdammt schnell!
Für uns heisst das, dass hier bereits der Doppler-Effekt zum Tragen kommt. Der Dopplereffekt beschreibt, dass Töne, die von sich schnell nähernden Objekten höher sind, als im Original. Entfernen sich die Objekte schnell, werden die Frequenzen tiefer. Da der SAT sich mit knapp 7km/s bewegt, sind das schonmal einige kHz.


4. Zurück zum Kochrezept:

Am besten man speichert sich Up/Downlink in einen Speicherplatz auf dem Gerät ein (auch die günstigen Radios haben einen Speicher).
Und zwar nicht nur ein Pärchen, sondern gleich 4-5 Paare. Für den SO-50 habe ich im Speicher folgende Kanäle abgelegt:
    Kanal 1: Down: 436.805 / Up: 145.850 / CTCSS 67Hz
    Kanal 2: Down: 436.805 / Up: 145.850 / CTCSS 74.4Hz
    Kanal 3: Down: 436.800 / Up: 145.850 / CTCSS 74.4Hz
    Kanal 4: Down: 436.795 / Up: 145.850 / CTCSS 74.4Hz
    Kanal 5: Down: 436.790 / Up: 145.850 / CTCSS 74.4Hz


Es fällt auf, dass Platz 1 und 2 gleich belegt sind. Liegt daran, dass man mit 67Hz den SAT „Auftastet“, mit 74.4Hz einen Durchgang startet.
Ferner ist der Uplink überall gleich, da der Dopplereffekt auf 2m nicht so sehr ins Gewicht fällt wie auf 70cm.
Soviel zur Vorbereitung des Funkgeräts.

5. Die Antenne und Co. so belassen wir so, wie wir das Gerät gekauft haben.

6. Wir machen uns mit der App vertraut. Speziell der „Radar“-Ansicht (siehe Bild).

![Minimalsetup für den Satellitenfunk](/aktivitaeten/LEO-2023-03-01/230301_leo_full.jpg)

Der weisse Pfeil zeigt dorthin, wo der SAT „aufgehen“ wird. Die blaue Linie zeigt an, wo er entlangzieht. (Azimuth)
Auf der linken Seite gibt es noch eine Art „Wasserwaage“, die gibt die Elevation an (Also wie hoch am Horizont steht der SAT).
In der Ansicht „Detail“ kann man sehen, wann es überhaupt so weit ist. Beim SO-50 bleiben einem (theoretisch) bis zu 15 Minuten, je nach Überflug.
Da wir ja mit „Low-Cost-Equipment“ arbeiten, reduzieren sich diese 15Min. meist auf max. 1-2 Minuten. Nämlich dann wenn die Elevation am größten ist.
Elevation gross heisst: >70Grad - dann ist der Vogel fast über uns.

7. Jetzt heisst es schnell sein, wenn der SAT über uns ist. Wir halten das Funkgerät möglichst Waagerecht und im rechten Winkel zur Flugbahn. Dann ist die Chance, dass wir den SAT hören, und der uns, am größten.

8. Steht also der SAT kurz vorm Zenit (Höchster Punkt über uns), können wir versuchen über Kanal 1 den SAT aufzutasten. Anschliessend flink auf Kanal 2 gehen und CQ rufen oder halt auf einen CQ-Ruf Antworten.

9. Je weiter sich der SAT von uns wieder wegbewegt, desto höher gehen wir im Kanal (Wegbewegende Objekte / Dopplereffekt: Frequenz wird niedriger)

## Tipps & Tricks
Das war es auch schon. Noch ein paar Tips:

- Wie im Amateurfunk überall üblich empfiehlt es sich erstmal zu hören. Dadurch bekommt man ein Gefühl, wie die Antenne/das Gerät zu halten ist. Man wird schnell feststellen das geringe Änderungen des Antennenwinkels große Auswirkungen auf die Empfangsqualität haben.
- Weiterhin gut: Hören(!) und nicht direkt im ersten Versuch ein CQ probieren. Sondern hören(!!) und dann ggf. Antworten.
- Durchgänge sind auf LEOs - aufgrund der kurzen Überflugzeit - kurz zu halten. Auf ein CQ folgt das eigene Callsign, darauf bestätigt der CQ-Rufende mit Rapport und Locator. Man selbst bestätigt auch mit Rapport und Locator sowie 73. Keine epischen Klönschnacks. Ihr werdet feststellen, dass auf den LEOs verdammt viel los ist. Und zwar bei fast jedem Überflug.
- Loggen: Will man die heissbegehrte QSL-Karte bzw. die LoTW-QSL, so empfiehlt es sich im Log neben dem Namen des Satelliten auch den SAT_MODE mit anzugeben. Bei SO-50 ist das „V/U“. Das VU steht für die Bänder hinter dem Up/Downlink.

## Ein Wort der Warnung! ;-)
An dieser Stelle noch mal herzlichen Dank an DO7OO aus Bremen, ohne den ich das vermutlich nie ausprobiert hätte.
Vorsicht: Suchtgefahr ist nicht auszuschliessen.

vy 73, Jörg, DJ7NT
