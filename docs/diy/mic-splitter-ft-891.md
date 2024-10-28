---
sidebarDepth: 2
description: Selbstbau Mic-Splitter für den FT-891, die perfekte Ergänzung für Multi-OP-Aktivierungen
head:
  - - meta
    - property: og:image
      content: https://draussenfunker.github.io/images/diy/mic-splitter-ft-891/mic-split-action.jpeg
---


# Selbstbau Mic-Splitter für den FT-891: Die perfekte Ergänzung für Multi-OP-Aktivierungen

Wer kennt es nicht? Man ist zusammen mit anderen Funkamateuren im Park, will eine Multi-Operator-Aktivierung machen und die Hunter warten trotz eines freundlichen "please stand by for second operator" nicht die paar Sekunden ab, die das Mikrofon von dem einen Mund zum anderen braucht.

Die Lösung: Ein selbstgebauter Mikrofon-Splitter, der es erlaubt zwei Mikrofone gleichzeitig an einem Funkgerät zu betreiben.
Der Wechsel zwischen zwei OPs ist instantan. Selbst wenn man als größere Gruppe im Park ist, ist immer ein Mikrofon frei um weitergereicht zu werden, während das andere Mikrofon aktiv genutzt wird.

Testimonial eines POTA-Hunters: "You all handed over very quickly, I was impressed!"

![Mic Splitter bei einer Aktivierung](/images/diy/mic-splitter-ft-891/mic-split-action.jpeg)

### Schaltplan

Das Yaesu FT-891 benutzt für den Mikrofonanschluss einen Handelsüblichen RJ45-Stecker den man bei Netzwerkkabeln wiederfindet.
Die Stecker-Belegung beim FT-891 und MH-31 ist nach [G4WPW](https://www.qsl.net/g4wpw/mh31a.html):

- 1. Fast Scan Button
- 2. Ground
- 3. PTT
- 4. Mic
- 5. Mic Ground
- 6. +5V Mic 
- 7. Up Button
- 8. Down Button

Die Idee hinter dem Splitter ist, mit PTT des primären Mikrofons (P), sowohl das mit dem Funkgerät verbundene Mikrofon von dem sekundären Mikrofon (S) auf Primär zu schalten, als auch PTT zu aktivieren.
Für die Schaltung wird mit der PTT-Taste von P ein Signal-Relais mit zwei Wechslern angesteuert, so kann P das Mikrofon von S "stehlen" und PTT auslösen.
Alle weiteren Leitungen werden einfach parallel Verbunden. Betrieben wird das Relais mit den vorhandenen +5V Mic-Spannung, die über PTT von P nach Ground verbunden werden.
Mit Dioden wird noch eine Relais-Schutzschaltung gebaut.

![Mic-Splitter Schaltplan](/images/diy/mic-splitter-ft-891/mic-split-schematic.jpg)

Von dem Schaltplan auf das Layout einer Punkt-Steifenraster-Platine übertragen:

![Mic-Splitter Platinen-Layout](/images/diy/mic-splitter-ft-891/mic-split-lochraster-layout.jpg)

### Teile

- Signal-Relais 5V (z.B. HFD27-005-S)
- Schalt-Diode 1N 4148
- Zenerdiode ZF 4,3
- 3x RJ45 Adapter zur Frontplattenmontage
- 3x RJ45-Crimpstecker
- Punkt-Streifenrasterplatine (Lochraster geht natürlich auch, wenn man Verbindungen zieht.)
- Kunststoffgehäuse (60x80x40mm genutzt)
- Schrauben um die RJ45 Adapter an Gehäuse zu schrauben.
- Netzwerkkabel aus der Restekiste

Für die Nutzung wird zusätzlich benötigt:

- RJ-45 Kabel für die Verbindung vom FT-891 zum Splitter
- ein zweites MH-31 Mikrofon

### Werkzeug

- Lötkolben, Lötzinn etc.
- Kabelschere
- Abisolier-Werkzeug
- Cutter-Messer/feine Säge
- RJ45-Crimpzange
- Bohrer
- Feile

### Aufbau

Die Baubeschreibung ist für die Yaesu MH-31 Mikofone für das Yaesu FT-891 gedacht, die Idee dahinter lässt sich aber sicher gut auch für andere Funkgeräte adaptieren.

::: warning Nachbau auf eigene Gefahr
Die Beschreibung ist als Inspirationsquelle gedacht, für durch nachgebaute Mikrofon-Splitter entstehende Schäden wird durch den Autor und draussenfunker.de keine Haftung übernommen.
:::


Zunächst das Gehäuse vorbereiten. Hierzu drei Löcher in passender größe für die RJ45 Adapter zur Frontplatten-Montage mit Bohrer, Cutter-Messer ggf. Feile einarbeiten.
Da das Gehäuse recht eng ist, muss man vorher genau ausprobieren, wie die Adapter so rein passen, dass noch die RJ45-Stecker angeschlossen werden können und die Platine platz hat.

Die Platine mit einem Messer oder einer feinen Säge in die passende Größe zurechtschneiden.
Zur Montage der Teile auf einer Punkt-Steifenrasterplatine muss der Schaltplan entsprechend auf die Platine übertragen werden.
Die schwarzen Markierungen sind die geplanten Lötbrücken, mit Bleistift sind die Zahlen der Leitungen sowie mit P(rimary), S(econdary), T(rx) die einzelnen Stecker markiert.
Bei Leitungen 3 und 4 muss aufgepasst werden, dass P und S nicht vertauscht werden. 3 von Primary wird oben rechts am Relais angeschlossen, 3 von Secondary und TRX unten Links vom Relais.

![Platine mit Markierungen](/images/diy/mic-splitter-ft-891/mic-split-lochraster-beschriftet.jpeg)

Nun das Relais und die Dioden auf die Platine löten und eingezeichneten Lötbrücken herstellen.
Kurze Stücke Netzwerkkabel abisolieren und in die RJ45 Stecker crimpen.
Diese Stecker am besten mit P, S und T beschriften und die Leitungen entsprechend des Schaltplans und der Markierungen an die Platine löten.

![Platine mit Kabeln](/images/diy/mic-splitter-ft-891/mic-split-platine-mit-bauteilen.jpeg)

Die Platine kann nun im Gehäuse angebracht und die Stecker von innen in die Adapter gesteckt werden.

![Platine im Gehäuse](/images/diy/mic-splitter-ft-891/mic-split-in-case.jpeg)

Jetzt noch das Gehäuse schließen, entsprechend verzieren und der Gruppen-Aktivierung steht nichts im Wege.

![Platine im Gehäuse](/images/diy/mic-splitter-ft-891/mic-split-verkabelt.jpeg)
