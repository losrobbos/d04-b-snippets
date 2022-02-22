## Von HIGH LEVEL Beschreibung zum CODE

Wir wollen etwas mit Code umsetzen. Doch keinen Plan, wie anfangen? 

Wie kommen wir vom PROBLEM zum CODE?

### Beispiel: Pizza Liste mit Suche

Wenn wir keine Ahnung haben, wie wir mit einer Aufgabe anfangen sollen, hilft es, zunächst das Problem ZU BESCHREIBEN. So genau wie möglich. Von HIGH LEVEL zu immer detaillierter.

Und wie man sieht, kommen wir so fast automatisch (!) am Ende schon sehr nah an den Code heran, den wir schreiben müssen. 

Je nachdem wie GENAU wir beschreiben können, was passiert!

Programmieren bedeutet also oft genau zu verstehen, welche Schritt LOGISCH ablaufen, bevor wir Code schreiben.

### HIGH Level Beschreibung (ohne Code)

- Wir wollen eine LISTE von Pizzen sehen
- Wir wollen nach dem Pizza-Titel über ein Suchfeld suchen können
- Nur Pizzen, die das Suchwort im Titel haben, sollen angezeigt werden

### Von HIGH Level zur LOGIK / CODE

Abkürzungen: 

- [HL] = High Level
- [CL] = Code Level
- Code-Keywörter sind großgeschrieben!


#### Pizza Liste 

- [HL] Wir haben eine Liste von Items / Pizzen
  => Wir haben einen ARRAY von OBJECTS

- [HL] Wir wollen für jede Pizza eine HTML Card mit den Details der Pizza ausgeben
  - [CL] Dafür müssen durch jedes OBJECT im ARRAY LOOPEN
  - [CL] FÜR JEDES Object wollen wir das Object umwandeln (=MAPPEN) in HTML
  - [CL] Wir wollen das PARENT CONTAINER Element für alle Pizzen in HTML finden 
  - [CL] Wir wollen den HTML Pizza-String in das Parent HTML Element einfügen

#### Pizza Suche

- [HL] User gibt ein Wort in einem Suche Input Feld ein
  - [CL] User Eingabe wird in VARIABLE zwischengespeichert
  - [CL] Bei jeder Änderung des Wortes vom User wird die VARIABLE neu gesetzt
  - [CL] Genauer: Während User einen KEY tippt, wird Such Variable upgedated / neu gesetzt
  - [CL] Noch genauer: Wenn das Event "KeyDown" im Suchfeld auftritt, wollen wir die VARIABLE updaten

- [HL] Während User tippt wird Liste automatisch gefiltert
- [HL] Es sollen nur Items in der Liste angezeigt werden, die das Suchwort im Titel haben
  - [CL] Der User kann die Suche jederzeit SELBST triggern. Wir brauchen also eine FUNCTION, die immer auf Wunsch des Users AUFGERUFEN werden soll
  - [CL] Genauer: Beim Tippen wird eine FUNCTION aufgerufen, die durch den Array loopt, von jedem Item den Titel checkt, ob das Suchwort im Titel drin ist. Wenn ja: Zeige dieses Item an. Wenn nicht: LÖSCHE dieses Item
  - [CL] Noch genauer: Beim "KeyDown" Event wird eine FUNCTION aufgerufen, die durch den Pizza ARRAY loopt, von jedem OBJECT das Title Property checkt, IF das Suchtwort im Titel INCLUDED ist. 
    - [CL] IF ja: Lasse dieses Item in der Liste. ELSE: Lösche dieses Item / lösche es in Anzeige

  