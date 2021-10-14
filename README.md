# How to nakijken

Om het script te runnen, doe je de volgende command in de terminal:

```console
node index.js
```

Je kunt de verschillende schemas, correcte en foute objecten simpel in de functie in de index.js aanpassen.

Voorbeeld voor car dat correct valideert:

```javascript
console.log(validator(carSchema, carObj));
```

Voorbeeld voor car dat incorrect valideert:

```javascript
console.log(validator(carSchema, carObjF));
```

Alternatief incorrect voor bar:

```javascript
console.log(validator(barSchema, barObjF));
```

De validator zal zowel een boolean teruggeven, als een errormessage wanneer het schema niet matcht met het object.

# Files structuur

Naast de index.js waar de validator, schemas en input objecten geimporteert zijn, is er een validator.js en een errormessage.js. Ik heb er voor gekozen om de errormessage functie te exporteren naar de validator.js om de validator.js overzichtelijker te houden.

Voor het nakijk gemak heb ik er voor gekozen de gehele validator functie te importeren naar de index.js, zodat de index.js zelf zo kort mogelijk is en je gemakkelijk de inputs kunt veranderen.

# Sidenote over implementatie

Hoewel er niet expliciet is gevraagd om een errormessage vanuit de validator, vond ik de volgende context daarvoor voldoende om dat toch te doen: 'De hoop is dat een object validator kan helpen met het sneller inzichtelijk maken van foutieve API responses of breaking changes.'.

In de praktijk zal ik uiteraard altijd verifieren of dit nodig is.

# Sidenotes over de code

In de compareObjTypesToSchema functie in validator.js (lijn 17), staat nu een if, else if, else functie. Ik vind dit leesbaarder dan een korte switch statement. Mochten de requirements later uitbreiden, zoals wanneer bijvoorbeeld null type of functies gecheckt moeten worden, dan zou ik wel een switch statement gebruiken.

Een laatste opmerking is dat op dit moment de logValidationError functie in errorMessage.js (lijn 1) geen return message heeft, maar slechts iets logt op de console. In de praktijk zou deze message niet gelogt worden maar zijn weg naar de gebruiker vinden.
