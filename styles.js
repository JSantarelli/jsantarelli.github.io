(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n@charset \"UTF-8\";\n@font-face {\r\n  font-family: \"andes\";\r\n  src:url(\"andes.eot\");\r\n  src:url(\"andes.eot?#iefix\") format(\"embedded-opentype\"),\r\n    url(\"andes.woff\") format(\"woff\"),\r\n    url(\"andes.ttf\") format(\"truetype\"),\r\n    url(\"andes.svg#andes\") format(\"svg\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n\r\n}\n[data-icon]:before {\r\n  font-family: \"andes\" !important;\r\n  content: attr(data-icon);\r\n  font-style: normal !important;\r\n  font-weight: normal !important;\r\n  font-variant: normal !important;\r\n  text-transform: none !important;\r\n  speak: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\n[class^=\"icon-\"]:before,\r\n[class*=\" icon-\"]:before {\r\n  font-family: \"andes\" !important;\r\n  font-style: normal !important;\r\n  font-weight: normal !important;\r\n  font-variant: normal !important;\r\n  text-transform: none !important;\r\n  speak: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\n.icon-abecedario:before {\r\n  content: \"\\61\";\r\n}\n.icon-adn:before {\r\n  content: \"\\62\";\r\n}\n.icon-alarma:before {\r\n  content: \"\\63\";\r\n}\n.icon-ambulancia:before {\r\n  content: \"\\64\";\r\n}\n.icon-anciana:before {\r\n  content: \"\\65\";\r\n}\n.icon-andes:before {\r\n  content: \"\\66\";\r\n}\n.icon-anestesia:before {\r\n  content: \"\\67\";\r\n}\n.icon-auto-policia:before {\r\n  content: \"\\68\";\r\n}\n.icon-bisturi:before {\r\n  content: \"\\69\";\r\n}\n.icon-bloques-reloj:before {\r\n  content: \"\\6a\";\r\n}\n.icon-calendario:before {\r\n  content: \"\\6b\";\r\n}\n.icon-calendario-fecha-outline:before {\r\n  content: \"\\6e\";\r\n}\n.icon-calendario-flecha-abajo:before {\r\n  content: \"\\6f\";\r\n}\n.icon-calendario-flechas-circulares:before {\r\n  content: \"\\70\";\r\n}\n.icon-calendario-mas:before {\r\n  content: \"\\71\";\r\n}\n.icon-calendario-rango-bold:before {\r\n  content: \"\\72\";\r\n}\n.icon-calendario-tilde:before {\r\n  content: \"\\73\";\r\n}\n.icon-calendarios:before {\r\n  content: \"\\74\";\r\n}\n.icon-cama:before {\r\n  content: \"\\75\";\r\n}\n.icon-cama-candado:before {\r\n  content: \"\\76\";\r\n}\n.icon-cama-destendida:before {\r\n  content: \"\\77\";\r\n}\n.icon-cama-engranaje:before {\r\n  content: \"\\78\";\r\n}\n.icon-cama-herramienta:before {\r\n  content: \"\\79\";\r\n}\n.icon-cama-paciente:before {\r\n  content: \"\\7a\";\r\n}\n.icon-cama-reloj:before {\r\n  content: \"\\6c\";\r\n}\n.icon-camara-foto:before {\r\n  content: \"\\6d\";\r\n}\n.icon-camilla:before {\r\n  content: \"\\41\";\r\n}\n.icon-camion-bomberos:before {\r\n  content: \"\\42\";\r\n}\n.icon-candado:before {\r\n  content: \"\\43\";\r\n}\n.icon-celular:before {\r\n  content: \"\\44\";\r\n}\n.icon-celular-llave:before {\r\n  content: \"\\45\";\r\n}\n.icon-celular-mano:before {\r\n  content: \"\\46\";\r\n}\n.icon-celular-paciente:before {\r\n  content: \"\\47\";\r\n}\n.icon-centro-salud:before {\r\n  content: \"\\48\";\r\n}\n.icon-circulo-botella:before {\r\n  content: \"\\49\";\r\n}\n.icon-circulo-camara:before {\r\n  content: \"\\4a\";\r\n}\n.icon-circulo-hospital:before {\r\n  content: \"\\4b\";\r\n}\n.icon-circulo-madre-hijo:before {\r\n  content: \"\\4c\";\r\n}\n.icon-circulo-medico:before {\r\n  content: \"\\4d\";\r\n}\n.icon-circulo-paciente:before {\r\n  content: \"\\4e\";\r\n}\n.icon-click:before {\r\n  content: \"\\4f\";\r\n}\n.icon-clinica:before {\r\n  content: \"\\50\";\r\n}\n.icon-corazon:before {\r\n  content: \"\\51\";\r\n}\n.icon-corazon-cruz:before {\r\n  content: \"\\52\";\r\n}\n.icon-corazon-outline:before {\r\n  content: \"\\53\";\r\n}\n.icon-credencial-paciente:before {\r\n  content: \"\\54\";\r\n}\n.icon-credencial-usuario:before {\r\n  content: \"\\55\";\r\n}\n.icon-cruz:before {\r\n  content: \"\\56\";\r\n}\n.icon-cruz-hospital:before {\r\n  content: \"\\57\";\r\n}\n.icon-cuentagota:before {\r\n  content: \"\\58\";\r\n}\n.icon-cuerpo:before {\r\n  content: \"\\59\";\r\n}\n.icon-cuna-candado:before {\r\n  content: \"\\5a\";\r\n}\n.icon-cuna-destendida:before {\r\n  content: \"\\30\";\r\n}\n.icon-cuna-herramienta:before {\r\n  content: \"\\31\";\r\n}\n.icon-cuna-paciente:before {\r\n  content: \"\\32\";\r\n}\n.icon-cuna-reloj:before {\r\n  content: \"\\33\";\r\n}\n.icon-defensa-civil:before {\r\n  content: \"\\34\";\r\n}\n.icon-desvinculo:before {\r\n  content: \"\\35\";\r\n}\n.icon-diario:before {\r\n  content: \"\\36\";\r\n}\n.icon-doctora:before {\r\n  content: \"\\37\";\r\n}\n.icon-docuemento-manzana:before {\r\n  content: \"\\38\";\r\n}\n.icon-documento:before {\r\n  content: \"\\39\";\r\n}\n.icon-documento-corazon:before {\r\n  content: \"\\21\";\r\n}\n.icon-documento-cruz:before {\r\n  content: \"\\22\";\r\n}\n.icon-documento-cruz-hospital:before {\r\n  content: \"\\23\";\r\n}\n.icon-documento-lapiz:before {\r\n  content: \"\\24\";\r\n}\n.icon-documento-lupa:before {\r\n  content: \"\\25\";\r\n}\n.icon-documento-mas:before {\r\n  content: \"\\26\";\r\n}\n.icon-documento-paciente:before {\r\n  content: \"\\27\";\r\n}\n.icon-documento-reloj:before {\r\n  content: \"\\28\";\r\n}\n.icon-documento-termometro:before {\r\n  content: \"\\29\";\r\n}\n.icon-documento-tilde:before {\r\n  content: \"\\2a\";\r\n}\n.icon-documento-tubo:before {\r\n  content: \"\\2b\";\r\n}\n.icon-documentos:before {\r\n  content: \"\\2c\";\r\n}\n.icon-enfermera-outline:before {\r\n  content: \"\\2d\";\r\n}\n.icon-enfermero:before {\r\n  content: \"\\2e\";\r\n}\n.icon-entrada:before {\r\n  content: \"\\3b\";\r\n}\n.icon-enviar:before {\r\n  content: \"\\3c\";\r\n}\n.icon-escritorio:before {\r\n  content: \"\\3d\";\r\n}\n.icon-estadistica:before {\r\n  content: \"\\3f\";\r\n}\n.icon-estetoscopio:before {\r\n  content: \"\\40\";\r\n}\n.icon-exclamacion:before {\r\n  content: \"\\5e\";\r\n}\n.icon-farmacia:before {\r\n  content: \"\\60\";\r\n}\n.icon-familia:before {\r\n  content: \"\\2f\";\r\n}\n.icon-enfermero-outline-125:before {\r\n  content: \"\\3a\";\r\n}\n.icon-enfermero-outline-134:before {\r\n  content: \"\\3e\";\r\n}\n.icon-estomago:before {\r\n  content: \"\\5f\";\r\n}\n.icon-femenino:before {\r\n  content: \"\\5b\";\r\n}\n.icon-ferula:before {\r\n  content: \"\\7b\";\r\n}\n.icon-flecha-abajo:before {\r\n  content: \"\\7c\";\r\n}\n.icon-flecha-arriba:before {\r\n  content: \"\\7d\";\r\n}\n.icon-flecha-derecha:before {\r\n  content: \"\\7e\";\r\n}\n.icon-flecha-izquierda:before {\r\n  content: \"\\5c\";\r\n}\n.icon-formula:before {\r\n  content: \"\\e000\";\r\n}\n.icon-frasco:before {\r\n  content: \"\\e001\";\r\n}\n.icon-frasco-pastillas:before {\r\n  content: \"\\e002\";\r\n}\n.icon-garganta:before {\r\n  content: \"\\e003\";\r\n}\n.icon-ginecologia:before {\r\n  content: \"\\e004\";\r\n}\n.icon-giro:before {\r\n  content: \"\\e005\";\r\n}\n.icon-herramienta:before {\r\n  content: \"\\e006\";\r\n}\n.icon-zoom-in:before {\r\n  content: \"\\e007\";\r\n}\n.icon-zoom-out:before {\r\n  content: \"\\e008\";\r\n}\n.icon-zoom:before {\r\n  content: \"\\e009\";\r\n}\n.icon-vinculo:before {\r\n  content: \"\\e00a\";\r\n}\n.icon-inhalador-52:before {\r\n  content: \"\\e00b\";\r\n}\n.icon-pildora:before {\r\n  content: \"\\e00c\";\r\n}\n.icon-recipiente:before {\r\n  content: \"\\e00d\";\r\n}\n.icon-silencio:before {\r\n  content: \"\\e00f\";\r\n}\n.icon-salida:before {\r\n  content: \"\\e010\";\r\n}\n.icon-reloj:before {\r\n  content: \"\\e011\";\r\n}\n.icon-paciente:before {\r\n  content: \"\\e012\";\r\n}\n.icon-pastillas:before {\r\n  content: \"\\e013\";\r\n}\n.icon-pastilla-79:before {\r\n  content: \"\\e014\";\r\n}\n.icon-planilla-tubo:before {\r\n  content: \"\\e016\";\r\n}\n.icon-planilla-pipeta:before {\r\n  content: \"\\e017\";\r\n}\n.icon-planilla-electro:before {\r\n  content: \"\\e018\";\r\n}\n.icon-pipeta:before {\r\n  content: \"\\e019\";\r\n}\n.icon-pico-izquierda:before {\r\n  content: \"\\e01a\";\r\n}\n.icon-pico-derecha:before {\r\n  content: \"\\e01b\";\r\n}\n.icon-pico-arriba:before {\r\n  content: \"\\e01c\";\r\n}\n.icon-pico-abajo:before {\r\n  content: \"\\e01d\";\r\n}\n.icon-mano-nio:before {\r\n  content: \"\\e00e\";\r\n}\n.icon-marcador:before {\r\n  content: \"\\e015\";\r\n}\n.icon-marcador-salud:before {\r\n  content: \"\\e01e\";\r\n}\n.icon-mas:before {\r\n  content: \"\\e01f\";\r\n}\n.icon-masculino:before {\r\n  content: \"\\e020\";\r\n}\n.icon-oxigeno:before {\r\n  content: \"\\e021\";\r\n}\n.icon-oreja:before {\r\n  content: \"\\e022\";\r\n}\n.icon-nube-subir:before {\r\n  content: \"\\e023\";\r\n}\n.icon-nube-bajar:before {\r\n  content: \"\\e024\";\r\n}\n.icon-nodos:before {\r\n  content: \"\\e025\";\r\n}\n.icon-molecula:before {\r\n  content: \"\\e026\";\r\n}\n.icon-microscopio:before {\r\n  content: \"\\e027\";\r\n}\n.icon-interaccion:before {\r\n  content: \"\\e028\";\r\n}\n.icon-lapiz-documento:before {\r\n  content: \"\\e029\";\r\n}\n.icon-lapiz:before {\r\n  content: \"\\e02a\";\r\n}\n.icon-paciente-hombre:before {\r\n  content: \"\\e02c\";\r\n}\n.icon-paciente-mujer:before {\r\n  content: \"\\e02d\";\r\n}\n.icon-medico:before {\r\n  content: \"\\e02e\";\r\n}\n.icon-tilde:before {\r\n  content: \"\\e02f\";\r\n}\n.icon-vacuna:before {\r\n  content: \"\\e030\";\r\n}\n.icon-puerta-salir:before {\r\n  content: \"\\e031\";\r\n}\n.icon-prohibido:before {\r\n  content: \"\\e032\";\r\n}\n.icon-pregunta:before {\r\n  content: \"\\e033\";\r\n}\n.icon-telefono:before {\r\n  content: \"\\e034\";\r\n}\n.icon-termometro-55:before {\r\n  content: \"\\e035\";\r\n}\n.icon-tablet:before {\r\n  content: \"\\e036\";\r\n}\n.icon-recuperar:before {\r\n  content: \"\\e037\";\r\n}\n.icon-paciente-rayos:before {\r\n  content: \"\\e038\";\r\n}\n.icon-paciente-sol:before {\r\n  content: \"\\e039\";\r\n}\n.icon-particulas:before {\r\n  content: \"\\e03a\";\r\n}\n.icon-turno-menos:before {\r\n  content: \"\\e03b\";\r\n}\n.icon-turno-mas:before {\r\n  content: \"\\e03c\";\r\n}\n.icon-usuarios:before {\r\n  content: \"\\e03d\";\r\n}\n.icon-usuario-tilde:before {\r\n  content: \"\\e03e\";\r\n}\n.icon-usuario-mas:before {\r\n  content: \"\\e03f\";\r\n}\n.icon-llamada-saliente:before {\r\n  content: \"\\e040\";\r\n}\n.icon-usuario-reloj-outline:before {\r\n  content: \"\\e045\";\r\n}\n.icon-usuario-tilde-outline:before {\r\n  content: \"\\e046\";\r\n}\n.icon-pulmones:before {\r\n  content: \"\\e043\";\r\n}\n.icon-logo-youtube:before {\r\n  content: \"\\e044\";\r\n}\n.icon-logo-facebook:before {\r\n  content: \"\\e047\";\r\n}\n.icon-logo-github:before {\r\n  content: \"\\e048\";\r\n}\n.icon-mail:before {\r\n  content: \"\\e049\";\r\n}\n.icon-paciente-casa:before {\r\n  content: \"\\e04b\";\r\n}\n.icon-mano-gota:before {\r\n  content: \"\\e04c\";\r\n}\n.icon-mano-herramienta:before {\r\n  content: \"\\e04d\";\r\n}\n.icon-logo-github-outline:before {\r\n  content: \"\\e04e\";\r\n}\n.icon-logo-facebook-outline:before {\r\n  content: \"\\e04f\";\r\n}\n.icon-logo-youtube-outline:before {\r\n  content: \"\\e050\";\r\n}\n.icon-logo-whatsapp:before {\r\n  content: \"\\e051\";\r\n}\n.icon-logo-twitter-outline:before {\r\n  content: \"\\e052\";\r\n}\n.icon-logo-twitter:before {\r\n  content: \"\\e053\";\r\n}\n.icon-plasma:before {\r\n  content: \"\\e05c\";\r\n}\n.icon-laboratorio:before {\r\n  content: \"\\e02b\";\r\n}\n.icon-pc:before {\r\n  content: \"\\e058\";\r\n}\n.icon-pie:before {\r\n  content: \"\\e041\";\r\n}\n.icon-traumatologia:before {\r\n  content: \"\\e042\";\r\n}\n.icon-turno-tilde:before {\r\n  content: \"\\e04a\";\r\n}\n.icon-infante:before {\r\n  content: \"\\e055\";\r\n}\n.icon-informacion:before {\r\n  content: \"\\e056\";\r\n}\n.icon-mano:before {\r\n  content: \"\\e057\";\r\n}\n.icon-mail-outline:before {\r\n  content: \"\\e059\";\r\n}\n.icon-paciente-completo:before {\r\n  content: \"\\e05a\";\r\n}\n.icon-hombre-corriendo:before {\r\n  content: \"\\e05b\";\r\n}\n.icon-hombre-caminando:before {\r\n  content: \"\\e054\";\r\n}\n.icon-turno-codigo:before {\r\n  content: \"\\e05d\";\r\n}\n.icon-intestino:before {\r\n  content: \"\\e05e\";\r\n}\n.icon-inhalador-80:before {\r\n  content: \"\\e05f\";\r\n}\n.icon-paciente-medico:before {\r\n  content: \"\\e060\";\r\n}\n.icon-interconsulta:before {\r\n  content: \"\\e061\";\r\n}\n.icon-hospital:before {\r\n  content: \"\\e062\";\r\n}\n.icon-historial:before {\r\n  content: \"\\e063\";\r\n}\n.icon-jerarquia:before {\r\n  content: \"\\e064\";\r\n}\n.icon-riones:before {\r\n  content: \"\\e065\";\r\n}\n.icon-microbios:before {\r\n  content: \"\\e066\";\r\n}\n.icon-resonancia:before {\r\n  content: \"\\e067\";\r\n}\n.icon-calendario-fecha-abajo:before {\r\n  content: \"\\e069\";\r\n}\n.icon-calendario-fecha-arriba:before {\r\n  content: \"\\e06a\";\r\n}\n.icon-impresora:before {\r\n  content: \"\\e06b\";\r\n}\n.icon-madre-hijo:before {\r\n  content: \"\\e06c\";\r\n}\n.icon-mano-corazon:before {\r\n  content: \"\\e06e\";\r\n}\n.icon-turno-bold:before {\r\n  content: \"\\e071\";\r\n}\n.icon-turno-tilde-bold:before {\r\n  content: \"\\e072\";\r\n}\n.icon-turno-mas-bold:before {\r\n  content: \"\\e073\";\r\n}\n.icon-rayos:before {\r\n  content: \"\\e075\";\r\n}\n.icon-informe-medico:before {\r\n  content: \"\\e06d\";\r\n}\n.icon-web:before {\r\n  content: \"\\e068\";\r\n}\n.icon-trastorno:before {\r\n  content: \"\\e06f\";\r\n}\n.icon-termometro:before {\r\n  content: \"\\e070\";\r\n}\n.icon-rayos-1:before {\r\n  content: \"\\e074\";\r\n}\n.icon-semantics:before {\r\n  content: \"\\e076\";\r\n}\n.icon-logo-ministerio:before {\r\n  content: \"\\e077\";\r\n}\n.icon-logo-hpn:before {\r\n  content: \"\\e078\";\r\n}\n.icon-logo-bpn:before {\r\n  content: \"\\e079\";\r\n}\n.icon-medica:before {\r\n  content: \"\\e07a\";\r\n}\n.icon-logo-tics:before {\r\n  content: \"\\e07b\";\r\n}\n.icon-logo-ministerio-salud:before {\r\n  content: \"\\e07c\";\r\n}\n.icon-esqueleto:before {\r\n  content: \"\\e07d\";\r\n}\n.icon-hallazgo:before {\r\n  content: \"\\e07e\";\r\n}\n.icon-etiqueta:before {\r\n  content: \"\\5d\";\r\n}\n.icon-universidad:before {\r\n  content: \"\\e07f\";\r\n}\n.icon-estudiante:before {\r\n  content: \"\\e080\";\r\n}\n.icon-engranaje-outline:before {\r\n  content: \"\\e081\";\r\n}\n.icon-camion-mezclador:before {\r\n  content: \"\\e082\";\r\n}\n.icon-documento-cursor:before {\r\n  content: \"\\e083\";\r\n}\n.icon-grafico-torta:before {\r\n  content: \"\\e084\";\r\n}\n.icon-logo-provincia:before {\r\n  content: \"\\e085\";\r\n}\n.icon-maletin-salud:before {\r\n  content: \"\\e086\";\r\n}\n.icon-monitor-estadistica:before {\r\n  content: \"\\e087\";\r\n}\n.icon-manos-dinero:before {\r\n  content: \"\\e088\";\r\n}\n.icon-paciente-flecha:before {\r\n  content: \"\\e089\";\r\n}\n#layout[type=lateral] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(60vw, 1fr));\n  grid-template-rows: auto auto; }\n#friso {\n  grid-column: 1 / -1;\n  grid-row: 1;\n  background-color: white;\n  opacity: .25;\n  padding: 0 1rem; }\n#mapa {\n  grid-column: 1;\n  grid-row: 2;\n  mix-blend-mode: luminosity; }\n#lateral {\n  grid-column: 2;\n  grid-row: 1 / -1; }\nbody {\n  font-family: sans-serif;\n  margin: 0; }\nul {\n  padding: 0px; }\nul li {\n    list-style: none; }\n.border {\n  border: 2px solid; }\n.rounded {\n  border-radius: 25px;\n  padding: 10px; }\ndiv.wrapper {\n  background-image: linear-gradient(to right, #009dc9, #853188, #f4a47e); }\n#lateral {\n  padding: 1rem;\n  background-color: #062837;\n  color: white; }\n#lateral h5 {\n    margin-bottom: 0.5rem; }\n.botonera {\n  height: 5vh; }\nselect, input {\n  width: 100%;\n  height: 25px; }\nselect#capacitados, input#capacitados {\n    width: 75px; }\ninput, textarea, select, hr {\n  border-radius: 5px; }\ninput.w-100, textarea.w-100, select.w-100, hr.w-100 {\n    width: 100%; }\ninput.w-50, textarea.w-50, select.w-50, hr.w-50 {\n    width: 50%; }\n.no-icon {\n  display: none; }\nbutton, .success, .warning, .danger, .info {\n  height: 2rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 100px;\n  border-radius: 15px;\n  color: white;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  padding: 0 10px;\n  font-weight: bolder;\n  border: none; }\n.badge {\n  border: solid 1px #2CA2DA;\n  padding: 5px;\n  text-transform: uppercase;\n  color: #2CA2DA;\n  font-size: .5rem; }\n.success {\n  background: yellowgreen; }\n.warning {\n  background: orange; }\n.danger {\n  background: #EA1E79; }\n.info {\n  background: #2CA2DA; }\n.flex-h {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center; }\n.flex-v {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n.justify-start {\n  justify-content: flex-start; }\n.self-end {\n  align-self: flex-end; }\n.items-end {\n  align-items: flex-end; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGpzYW50YXJlbGxpXFxEZXNrdG9wXFxBTkRFU1xcSW50ZXJmYWNlc1xcYW5kZXMtbWFwL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXNzZXRzL2ljb25vcy9hbmRlcy1mb250LmNzcyIsInNyYy9DOlxcVXNlcnNcXGpzYW50YXJlbGxpXFxEZXNrdG9wXFxBTkRFU1xcSW50ZXJmYWNlc1xcYW5kZXMtbWFwL3NyY1xcYXNzZXRzXFxzY3NzXFxfbGF5b3V0LnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxqc2FudGFyZWxsaVxcRGVza3RvcFxcQU5ERVNcXEludGVyZmFjZXNcXGFuZGVzLW1hcC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQ0EvRSxpQkFBaUI7QUFFakI7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCOzs7eUNBR3VDO0VBQ3ZDLG9CQUFvQjtFQUNwQixtQkFBbUI7O0NBRXBCO0FBRUQ7RUFDRSxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxtQ0FBbUM7Q0FDcEM7QUFFRDs7RUFFRSxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLG1DQUFtQztDQUNwQztBQUVEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQzl0QkQ7RUFDSSxjQUFhO0VBQ2IsMkRBQTREO0VBQzVELDhCQUE2QixFQUNoQztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLFlBQVc7RUFDWCx3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLGdCQUFlLEVBQ2xCO0FBRUQ7RUFDSSxlQUFjO0VBQ2QsWUFBVztFQUNYLDJCQUEwQixFQUM3QjtBQUVEO0VBQ0ksZUFBYztFQUNkLGlCQUFnQixFQUNuQjtBRlREO0VBQ0ksd0JBQXVCO0VBQ3ZCLFVBQVMsRUFDWjtBQUVEO0VBQ0ksYUFBWSxFQUtmO0FBTkQ7SUFJUSxpQkFBZ0IsRUFDbkI7QUFHTDtFQUNJLGtCQUFpQixFQUNwQjtBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGNBQWEsRUFDaEI7QUFHRDtFQUNJLHVFRzdCK0QsRUg4QmxFO0FFbkJEO0VGc0JJLGNBQWE7RUFDYiwwQkczQ3VCO0VINEN2QixhQUFZLEVBS2Y7QUFSRDtJQU1RLHNCQUFxQixFQUN4QjtBQUdMO0VBQ0ksWUFBVyxFQUNkO0FBR0Q7RUFDSSxZQUFXO0VBQ1gsYUFBWSxFQUtmO0FBUEQ7SUFLUSxZQUFXLEVBQ2Q7QUFHTDtFQUNJLG1CQUFrQixFQVFyQjtBQVREO0lBR1EsWUFBVyxFQUNkO0FBSkw7SUFPUSxXQUFVLEVBQ2I7QUFLTDtFQUNJLGNBQWEsRUFDaEI7QUFFRDtFQUNJLGFBQVk7RUFDWiwyQkFBa0I7RUFBbEIsd0JBQWtCO0VBQWxCLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysb0JBQW1CO0VBQ25CLGFBQVksRUFDZjtBQVFEO0VBQ0ksMEJHckdnQjtFSHNHaEIsYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixlR3hHZ0I7RUh5R2hCLGlCQUFnQixFQUNuQjtBQUVEO0VBRUksd0JHMUdxQixFSDJHeEI7QUFFRDtFQUVJLG1CRzlHa0IsRUgrR3JCO0FBR0Q7RUFFSSxvQkd0SG1CLEVIdUh0QjtBQUVEO0VBRUksb0JHOUhnQixFSCtIbkI7QUFJRDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLG9CQUFtQixFQUN0QjtBQUVEO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qiw0QkFBMkIsRUFDOUI7QUFFRDtFQUNJLDRCQUEyQixFQUM5QjtBQUVEO0VBQ0kscUJBQW9CLEVBQ3ZCO0FBRUQ7RUFDSSxzQkFBcUIsRUFDeEIiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4vLyAkYWRpLWZvbnQtcGF0aDogJ35AYW5kZXMvaWNvbnMvaWNvbm9zLyc7XHJcbi8vIEBpbXBvcnQgJ35AYW5kZXMvaWNvbnMvc2Nzcy9hbmRlcy1pY29ucyc7XHJcblxyXG4vLyBMYXlvdXRcclxuQGltcG9ydCAnLi9hc3NldHMvc2Nzcy9sYXlvdXQnO1xyXG5cclxuLy8gVmFyaWFibGVzXHJcbkBpbXBvcnQgJy4vc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4vLyBBTkRFUyAtIEljb25zXHJcbkBpbXBvcnQgJy4vYXNzZXRzL2ljb25vcy9hbmRlcy1mb250LmNzcyc7XHJcblxyXG5cclxuLy8gR2xvYmFsZXNcclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxudWwge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgXHJcbiAgICBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmJvcmRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLnJvdW5kZWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi8vIEVzdGlsaXphZG8gbGF5b3V0XHJcbmRpdi53cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRhbmRlcy1kZWdyYWRlO1xyXG59XHJcblxyXG4jbGF0ZXJhbCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFuZGVzLWF6dWwtb3NjdXJvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3RvbmVyYSB7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxufVxyXG5cclxuLy8gQ29tcG9uZW50ZXNcclxuc2VsZWN0LCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuXHJcbiAgICAmI2NhcGFjaXRhZG9zIHtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGhyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICYudy0xMDAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnctNTAge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBJdGVtc1xyXG4ubm8taWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4lYmFzZUJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5cclxuLy8gQm90b25lc1xyXG5idXR0b24ge1xyXG4gICAgQGV4dGVuZCAlYmFzZUJ1dHRvbjtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICRhbmRlcy1henVsO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAkYW5kZXMtYXp1bDtcclxuICAgIGZvbnQtc2l6ZTogLjVyZW07XHJcbn1cclxuXHJcbi5zdWNjZXNzIHtcclxuICAgIEBleHRlbmQgJWJhc2VCdXR0b247XHJcbiAgICBiYWNrZ3JvdW5kOiAkYW5kZXMtdmVyZGU7XHJcbn1cclxuXHJcbi53YXJuaW5nIHtcclxuICAgIEBleHRlbmQgJWJhc2VCdXR0b247XHJcbiAgICBiYWNrZ3JvdW5kOiAkYW5kZXMtbmFyYW5qYTtcclxufVxyXG5cclxuXHJcbi5kYW5nZXIge1xyXG4gICAgQGV4dGVuZCAlYmFzZUJ1dHRvbjtcclxuICAgIGJhY2tncm91bmQ6ICRhbmRlcy1tYWdlbnRhO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICBAZXh0ZW5kICViYXNlQnV0dG9uO1xyXG4gICAgYmFja2dyb3VuZDogJGFuZGVzLWF6dWw7XHJcbn1cclxuXHJcblxyXG4vLyBEaXNwb3NpY2lvblxyXG4uZmxleC1oIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmp1c3RpZnktc3RhcnQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uc2VsZi1lbmQge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5pdGVtcy1lbmQge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59IiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiYW5kZXNcIjtcclxuICBzcmM6dXJsKFwiYW5kZXMuZW90XCIpO1xyXG4gIHNyYzp1cmwoXCJhbmRlcy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxyXG4gICAgdXJsKFwiYW5kZXMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gICAgdXJsKFwiYW5kZXMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLFxyXG4gICAgdXJsKFwiYW5kZXMuc3ZnI2FuZGVzXCIpIGZvcm1hdChcInN2Z1wiKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbn1cclxuXHJcbltkYXRhLWljb25dOmJlZm9yZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiYW5kZXNcIiAhaW1wb3J0YW50O1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcclxuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHNwZWFrOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbltjbGFzc149XCJpY29uLVwiXTpiZWZvcmUsXHJcbltjbGFzcyo9XCIgaWNvbi1cIl06YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogXCJhbmRlc1wiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBzcGVhazogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4uaWNvbi1hYmVjZWRhcmlvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDYxXCI7XHJcbn1cclxuLmljb24tYWRuOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDYyXCI7XHJcbn1cclxuLmljb24tYWxhcm1hOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDYzXCI7XHJcbn1cclxuLmljb24tYW1idWxhbmNpYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw2NFwiO1xyXG59XHJcbi5pY29uLWFuY2lhbmE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNjVcIjtcclxufVxyXG4uaWNvbi1hbmRlczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw2NlwiO1xyXG59XHJcbi5pY29uLWFuZXN0ZXNpYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw2N1wiO1xyXG59XHJcbi5pY29uLWF1dG8tcG9saWNpYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw2OFwiO1xyXG59XHJcbi5pY29uLWJpc3R1cmk6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNjlcIjtcclxufVxyXG4uaWNvbi1ibG9xdWVzLXJlbG9qOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDZhXCI7XHJcbn1cclxuLmljb24tY2FsZW5kYXJpbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw2YlwiO1xyXG59XHJcbi5pY29uLWNhbGVuZGFyaW8tZmVjaGEtb3V0bGluZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw2ZVwiO1xyXG59XHJcbi5pY29uLWNhbGVuZGFyaW8tZmxlY2hhLWFiYWpvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDZmXCI7XHJcbn1cclxuLmljb24tY2FsZW5kYXJpby1mbGVjaGFzLWNpcmN1bGFyZXM6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNzBcIjtcclxufVxyXG4uaWNvbi1jYWxlbmRhcmlvLW1hczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw3MVwiO1xyXG59XHJcbi5pY29uLWNhbGVuZGFyaW8tcmFuZ28tYm9sZDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw3MlwiO1xyXG59XHJcbi5pY29uLWNhbGVuZGFyaW8tdGlsZGU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNzNcIjtcclxufVxyXG4uaWNvbi1jYWxlbmRhcmlvczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw3NFwiO1xyXG59XHJcbi5pY29uLWNhbWE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNzVcIjtcclxufVxyXG4uaWNvbi1jYW1hLWNhbmRhZG86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNzZcIjtcclxufVxyXG4uaWNvbi1jYW1hLWRlc3RlbmRpZGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNzdcIjtcclxufVxyXG4uaWNvbi1jYW1hLWVuZ3JhbmFqZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw3OFwiO1xyXG59XHJcbi5pY29uLWNhbWEtaGVycmFtaWVudGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNzlcIjtcclxufVxyXG4uaWNvbi1jYW1hLXBhY2llbnRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDdhXCI7XHJcbn1cclxuLmljb24tY2FtYS1yZWxvajpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw2Y1wiO1xyXG59XHJcbi5pY29uLWNhbWFyYS1mb3RvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDZkXCI7XHJcbn1cclxuLmljb24tY2FtaWxsYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw0MVwiO1xyXG59XHJcbi5pY29uLWNhbWlvbi1ib21iZXJvczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw0MlwiO1xyXG59XHJcbi5pY29uLWNhbmRhZG86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNDNcIjtcclxufVxyXG4uaWNvbi1jZWx1bGFyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDQ0XCI7XHJcbn1cclxuLmljb24tY2VsdWxhci1sbGF2ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw0NVwiO1xyXG59XHJcbi5pY29uLWNlbHVsYXItbWFubzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw0NlwiO1xyXG59XHJcbi5pY29uLWNlbHVsYXItcGFjaWVudGU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNDdcIjtcclxufVxyXG4uaWNvbi1jZW50cm8tc2FsdWQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNDhcIjtcclxufVxyXG4uaWNvbi1jaXJjdWxvLWJvdGVsbGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNDlcIjtcclxufVxyXG4uaWNvbi1jaXJjdWxvLWNhbWFyYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw0YVwiO1xyXG59XHJcbi5pY29uLWNpcmN1bG8taG9zcGl0YWw6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNGJcIjtcclxufVxyXG4uaWNvbi1jaXJjdWxvLW1hZHJlLWhpam86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNGNcIjtcclxufVxyXG4uaWNvbi1jaXJjdWxvLW1lZGljbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw0ZFwiO1xyXG59XHJcbi5pY29uLWNpcmN1bG8tcGFjaWVudGU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNGVcIjtcclxufVxyXG4uaWNvbi1jbGljazpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw0ZlwiO1xyXG59XHJcbi5pY29uLWNsaW5pY2E6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNTBcIjtcclxufVxyXG4uaWNvbi1jb3Jhem9uOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDUxXCI7XHJcbn1cclxuLmljb24tY29yYXpvbi1jcnV6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDUyXCI7XHJcbn1cclxuLmljb24tY29yYXpvbi1vdXRsaW5lOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDUzXCI7XHJcbn1cclxuLmljb24tY3JlZGVuY2lhbC1wYWNpZW50ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw1NFwiO1xyXG59XHJcbi5pY29uLWNyZWRlbmNpYWwtdXN1YXJpbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw1NVwiO1xyXG59XHJcbi5pY29uLWNydXo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNTZcIjtcclxufVxyXG4uaWNvbi1jcnV6LWhvc3BpdGFsOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDU3XCI7XHJcbn1cclxuLmljb24tY3VlbnRhZ290YTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw1OFwiO1xyXG59XHJcbi5pY29uLWN1ZXJwbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw1OVwiO1xyXG59XHJcbi5pY29uLWN1bmEtY2FuZGFkbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw1YVwiO1xyXG59XHJcbi5pY29uLWN1bmEtZGVzdGVuZGlkYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwzMFwiO1xyXG59XHJcbi5pY29uLWN1bmEtaGVycmFtaWVudGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMzFcIjtcclxufVxyXG4uaWNvbi1jdW5hLXBhY2llbnRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDMyXCI7XHJcbn1cclxuLmljb24tY3VuYS1yZWxvajpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwzM1wiO1xyXG59XHJcbi5pY29uLWRlZmVuc2EtY2l2aWw6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMzRcIjtcclxufVxyXG4uaWNvbi1kZXN2aW5jdWxvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDM1XCI7XHJcbn1cclxuLmljb24tZGlhcmlvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDM2XCI7XHJcbn1cclxuLmljb24tZG9jdG9yYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwzN1wiO1xyXG59XHJcbi5pY29uLWRvY3VlbWVudG8tbWFuemFuYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwzOFwiO1xyXG59XHJcbi5pY29uLWRvY3VtZW50bzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwzOVwiO1xyXG59XHJcbi5pY29uLWRvY3VtZW50by1jb3Jhem9uOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDIxXCI7XHJcbn1cclxuLmljb24tZG9jdW1lbnRvLWNydXo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMjJcIjtcclxufVxyXG4uaWNvbi1kb2N1bWVudG8tY3J1ei1ob3NwaXRhbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyM1wiO1xyXG59XHJcbi5pY29uLWRvY3VtZW50by1sYXBpejpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyNFwiO1xyXG59XHJcbi5pY29uLWRvY3VtZW50by1sdXBhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDI1XCI7XHJcbn1cclxuLmljb24tZG9jdW1lbnRvLW1hczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyNlwiO1xyXG59XHJcbi5pY29uLWRvY3VtZW50by1wYWNpZW50ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyN1wiO1xyXG59XHJcbi5pY29uLWRvY3VtZW50by1yZWxvajpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyOFwiO1xyXG59XHJcbi5pY29uLWRvY3VtZW50by10ZXJtb21ldHJvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDI5XCI7XHJcbn1cclxuLmljb24tZG9jdW1lbnRvLXRpbGRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDJhXCI7XHJcbn1cclxuLmljb24tZG9jdW1lbnRvLXR1Ym86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMmJcIjtcclxufVxyXG4uaWNvbi1kb2N1bWVudG9zOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDJjXCI7XHJcbn1cclxuLmljb24tZW5mZXJtZXJhLW91dGxpbmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMmRcIjtcclxufVxyXG4uaWNvbi1lbmZlcm1lcm86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMmVcIjtcclxufVxyXG4uaWNvbi1lbnRyYWRhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDNiXCI7XHJcbn1cclxuLmljb24tZW52aWFyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDNjXCI7XHJcbn1cclxuLmljb24tZXNjcml0b3JpbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwzZFwiO1xyXG59XHJcbi5pY29uLWVzdGFkaXN0aWNhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDNmXCI7XHJcbn1cclxuLmljb24tZXN0ZXRvc2NvcGlvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDQwXCI7XHJcbn1cclxuLmljb24tZXhjbGFtYWNpb246YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcNWVcIjtcclxufVxyXG4uaWNvbi1mYXJtYWNpYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw2MFwiO1xyXG59XHJcbi5pY29uLWZhbWlsaWE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMmZcIjtcclxufVxyXG4uaWNvbi1lbmZlcm1lcm8tb3V0bGluZS0xMjU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcM2FcIjtcclxufVxyXG4uaWNvbi1lbmZlcm1lcm8tb3V0bGluZS0xMzQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcM2VcIjtcclxufVxyXG4uaWNvbi1lc3RvbWFnbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw1ZlwiO1xyXG59XHJcbi5pY29uLWZlbWVuaW5vOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDViXCI7XHJcbn1cclxuLmljb24tZmVydWxhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDdiXCI7XHJcbn1cclxuLmljb24tZmxlY2hhLWFiYWpvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDdjXCI7XHJcbn1cclxuLmljb24tZmxlY2hhLWFycmliYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw3ZFwiO1xyXG59XHJcbi5pY29uLWZsZWNoYS1kZXJlY2hhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDdlXCI7XHJcbn1cclxuLmljb24tZmxlY2hhLWl6cXVpZXJkYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw1Y1wiO1xyXG59XHJcbi5pY29uLWZvcm11bGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAwMFwiO1xyXG59XHJcbi5pY29uLWZyYXNjbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDAxXCI7XHJcbn1cclxuLmljb24tZnJhc2NvLXBhc3RpbGxhczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDAyXCI7XHJcbn1cclxuLmljb24tZ2FyZ2FudGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAwM1wiO1xyXG59XHJcbi5pY29uLWdpbmVjb2xvZ2lhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMDRcIjtcclxufVxyXG4uaWNvbi1naXJvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMDVcIjtcclxufVxyXG4uaWNvbi1oZXJyYW1pZW50YTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDA2XCI7XHJcbn1cclxuLmljb24tem9vbS1pbjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDA3XCI7XHJcbn1cclxuLmljb24tem9vbS1vdXQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAwOFwiO1xyXG59XHJcbi5pY29uLXpvb206YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAwOVwiO1xyXG59XHJcbi5pY29uLXZpbmN1bG86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAwYVwiO1xyXG59XHJcbi5pY29uLWluaGFsYWRvci01MjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDBiXCI7XHJcbn1cclxuLmljb24tcGlsZG9yYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDBjXCI7XHJcbn1cclxuLmljb24tcmVjaXBpZW50ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDBkXCI7XHJcbn1cclxuLmljb24tc2lsZW5jaW86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAwZlwiO1xyXG59XHJcbi5pY29uLXNhbGlkYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDEwXCI7XHJcbn1cclxuLmljb24tcmVsb2o6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAxMVwiO1xyXG59XHJcbi5pY29uLXBhY2llbnRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMTJcIjtcclxufVxyXG4uaWNvbi1wYXN0aWxsYXM6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAxM1wiO1xyXG59XHJcbi5pY29uLXBhc3RpbGxhLTc5OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMTRcIjtcclxufVxyXG4uaWNvbi1wbGFuaWxsYS10dWJvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMTZcIjtcclxufVxyXG4uaWNvbi1wbGFuaWxsYS1waXBldGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAxN1wiO1xyXG59XHJcbi5pY29uLXBsYW5pbGxhLWVsZWN0cm86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAxOFwiO1xyXG59XHJcbi5pY29uLXBpcGV0YTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDE5XCI7XHJcbn1cclxuLmljb24tcGljby1penF1aWVyZGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAxYVwiO1xyXG59XHJcbi5pY29uLXBpY28tZGVyZWNoYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDFiXCI7XHJcbn1cclxuLmljb24tcGljby1hcnJpYmE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAxY1wiO1xyXG59XHJcbi5pY29uLXBpY28tYWJham86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAxZFwiO1xyXG59XHJcbi5pY29uLW1hbm8tbmlvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMGVcIjtcclxufVxyXG4uaWNvbi1tYXJjYWRvcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDE1XCI7XHJcbn1cclxuLmljb24tbWFyY2Fkb3Itc2FsdWQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAxZVwiO1xyXG59XHJcbi5pY29uLW1hczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDFmXCI7XHJcbn1cclxuLmljb24tbWFzY3VsaW5vOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMjBcIjtcclxufVxyXG4uaWNvbi1veGlnZW5vOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMjFcIjtcclxufVxyXG4uaWNvbi1vcmVqYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDIyXCI7XHJcbn1cclxuLmljb24tbnViZS1zdWJpcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDIzXCI7XHJcbn1cclxuLmljb24tbnViZS1iYWphcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDI0XCI7XHJcbn1cclxuLmljb24tbm9kb3M6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAyNVwiO1xyXG59XHJcbi5pY29uLW1vbGVjdWxhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMjZcIjtcclxufVxyXG4uaWNvbi1taWNyb3Njb3BpbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDI3XCI7XHJcbn1cclxuLmljb24taW50ZXJhY2Npb246YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAyOFwiO1xyXG59XHJcbi5pY29uLWxhcGl6LWRvY3VtZW50bzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDI5XCI7XHJcbn1cclxuLmljb24tbGFwaXo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAyYVwiO1xyXG59XHJcbi5pY29uLXBhY2llbnRlLWhvbWJyZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDJjXCI7XHJcbn1cclxuLmljb24tcGFjaWVudGUtbXVqZXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAyZFwiO1xyXG59XHJcbi5pY29uLW1lZGljbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDJlXCI7XHJcbn1cclxuLmljb24tdGlsZGU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAyZlwiO1xyXG59XHJcbi5pY29uLXZhY3VuYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDMwXCI7XHJcbn1cclxuLmljb24tcHVlcnRhLXNhbGlyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMzFcIjtcclxufVxyXG4uaWNvbi1wcm9oaWJpZG86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAzMlwiO1xyXG59XHJcbi5pY29uLXByZWd1bnRhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMzNcIjtcclxufVxyXG4uaWNvbi10ZWxlZm9ubzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDM0XCI7XHJcbn1cclxuLmljb24tdGVybW9tZXRyby01NTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDM1XCI7XHJcbn1cclxuLmljb24tdGFibGV0OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMzZcIjtcclxufVxyXG4uaWNvbi1yZWN1cGVyYXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAzN1wiO1xyXG59XHJcbi5pY29uLXBhY2llbnRlLXJheW9zOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwMzhcIjtcclxufVxyXG4uaWNvbi1wYWNpZW50ZS1zb2w6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAzOVwiO1xyXG59XHJcbi5pY29uLXBhcnRpY3VsYXM6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAzYVwiO1xyXG59XHJcbi5pY29uLXR1cm5vLW1lbm9zOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwM2JcIjtcclxufVxyXG4uaWNvbi10dXJuby1tYXM6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAzY1wiO1xyXG59XHJcbi5pY29uLXVzdWFyaW9zOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwM2RcIjtcclxufVxyXG4uaWNvbi11c3VhcmlvLXRpbGRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwM2VcIjtcclxufVxyXG4uaWNvbi11c3VhcmlvLW1hczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDNmXCI7XHJcbn1cclxuLmljb24tbGxhbWFkYS1zYWxpZW50ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDQwXCI7XHJcbn1cclxuLmljb24tdXN1YXJpby1yZWxvai1vdXRsaW5lOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNDVcIjtcclxufVxyXG4uaWNvbi11c3VhcmlvLXRpbGRlLW91dGxpbmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA0NlwiO1xyXG59XHJcbi5pY29uLXB1bG1vbmVzOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNDNcIjtcclxufVxyXG4uaWNvbi1sb2dvLXlvdXR1YmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA0NFwiO1xyXG59XHJcbi5pY29uLWxvZ28tZmFjZWJvb2s6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA0N1wiO1xyXG59XHJcbi5pY29uLWxvZ28tZ2l0aHViOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNDhcIjtcclxufVxyXG4uaWNvbi1tYWlsOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNDlcIjtcclxufVxyXG4uaWNvbi1wYWNpZW50ZS1jYXNhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNGJcIjtcclxufVxyXG4uaWNvbi1tYW5vLWdvdGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA0Y1wiO1xyXG59XHJcbi5pY29uLW1hbm8taGVycmFtaWVudGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA0ZFwiO1xyXG59XHJcbi5pY29uLWxvZ28tZ2l0aHViLW91dGxpbmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA0ZVwiO1xyXG59XHJcbi5pY29uLWxvZ28tZmFjZWJvb2stb3V0bGluZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDRmXCI7XHJcbn1cclxuLmljb24tbG9nby15b3V0dWJlLW91dGxpbmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA1MFwiO1xyXG59XHJcbi5pY29uLWxvZ28td2hhdHNhcHA6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA1MVwiO1xyXG59XHJcbi5pY29uLWxvZ28tdHdpdHRlci1vdXRsaW5lOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNTJcIjtcclxufVxyXG4uaWNvbi1sb2dvLXR3aXR0ZXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA1M1wiO1xyXG59XHJcbi5pY29uLXBsYXNtYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDVjXCI7XHJcbn1cclxuLmljb24tbGFib3JhdG9yaW86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTAyYlwiO1xyXG59XHJcbi5pY29uLXBjOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNThcIjtcclxufVxyXG4uaWNvbi1waWU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA0MVwiO1xyXG59XHJcbi5pY29uLXRyYXVtYXRvbG9naWE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA0MlwiO1xyXG59XHJcbi5pY29uLXR1cm5vLXRpbGRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNGFcIjtcclxufVxyXG4uaWNvbi1pbmZhbnRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNTVcIjtcclxufVxyXG4uaWNvbi1pbmZvcm1hY2lvbjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDU2XCI7XHJcbn1cclxuLmljb24tbWFubzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDU3XCI7XHJcbn1cclxuLmljb24tbWFpbC1vdXRsaW5lOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNTlcIjtcclxufVxyXG4uaWNvbi1wYWNpZW50ZS1jb21wbGV0bzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDVhXCI7XHJcbn1cclxuLmljb24taG9tYnJlLWNvcnJpZW5kbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDViXCI7XHJcbn1cclxuLmljb24taG9tYnJlLWNhbWluYW5kbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDU0XCI7XHJcbn1cclxuLmljb24tdHVybm8tY29kaWdvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNWRcIjtcclxufVxyXG4uaWNvbi1pbnRlc3Rpbm86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA1ZVwiO1xyXG59XHJcbi5pY29uLWluaGFsYWRvci04MDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDVmXCI7XHJcbn1cclxuLmljb24tcGFjaWVudGUtbWVkaWNvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNjBcIjtcclxufVxyXG4uaWNvbi1pbnRlcmNvbnN1bHRhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNjFcIjtcclxufVxyXG4uaWNvbi1ob3NwaXRhbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDYyXCI7XHJcbn1cclxuLmljb24taGlzdG9yaWFsOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNjNcIjtcclxufVxyXG4uaWNvbi1qZXJhcnF1aWE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA2NFwiO1xyXG59XHJcbi5pY29uLXJpb25lczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDY1XCI7XHJcbn1cclxuLmljb24tbWljcm9iaW9zOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNjZcIjtcclxufVxyXG4uaWNvbi1yZXNvbmFuY2lhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNjdcIjtcclxufVxyXG4uaWNvbi1jYWxlbmRhcmlvLWZlY2hhLWFiYWpvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNjlcIjtcclxufVxyXG4uaWNvbi1jYWxlbmRhcmlvLWZlY2hhLWFycmliYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDZhXCI7XHJcbn1cclxuLmljb24taW1wcmVzb3JhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNmJcIjtcclxufVxyXG4uaWNvbi1tYWRyZS1oaWpvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNmNcIjtcclxufVxyXG4uaWNvbi1tYW5vLWNvcmF6b246YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA2ZVwiO1xyXG59XHJcbi5pY29uLXR1cm5vLWJvbGQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA3MVwiO1xyXG59XHJcbi5pY29uLXR1cm5vLXRpbGRlLWJvbGQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA3MlwiO1xyXG59XHJcbi5pY29uLXR1cm5vLW1hcy1ib2xkOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNzNcIjtcclxufVxyXG4uaWNvbi1yYXlvczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDc1XCI7XHJcbn1cclxuLmljb24taW5mb3JtZS1tZWRpY286YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA2ZFwiO1xyXG59XHJcbi5pY29uLXdlYjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDY4XCI7XHJcbn1cclxuLmljb24tdHJhc3Rvcm5vOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNmZcIjtcclxufVxyXG4uaWNvbi10ZXJtb21ldHJvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNzBcIjtcclxufVxyXG4uaWNvbi1yYXlvcy0xOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNzRcIjtcclxufVxyXG4uaWNvbi1zZW1hbnRpY3M6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA3NlwiO1xyXG59XHJcbi5pY29uLWxvZ28tbWluaXN0ZXJpbzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDc3XCI7XHJcbn1cclxuLmljb24tbG9nby1ocG46YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA3OFwiO1xyXG59XHJcbi5pY29uLWxvZ28tYnBuOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwNzlcIjtcclxufVxyXG4uaWNvbi1tZWRpY2E6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA3YVwiO1xyXG59XHJcbi5pY29uLWxvZ28tdGljczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDdiXCI7XHJcbn1cclxuLmljb24tbG9nby1taW5pc3RlcmlvLXNhbHVkOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwN2NcIjtcclxufVxyXG4uaWNvbi1lc3F1ZWxldG86YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA3ZFwiO1xyXG59XHJcbi5pY29uLWhhbGxhemdvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwN2VcIjtcclxufVxyXG4uaWNvbi1ldGlxdWV0YTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFw1ZFwiO1xyXG59XHJcbi5pY29uLXVuaXZlcnNpZGFkOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwN2ZcIjtcclxufVxyXG4uaWNvbi1lc3R1ZGlhbnRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwODBcIjtcclxufVxyXG4uaWNvbi1lbmdyYW5hamUtb3V0bGluZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDgxXCI7XHJcbn1cclxuLmljb24tY2FtaW9uLW1lemNsYWRvcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDgyXCI7XHJcbn1cclxuLmljb24tZG9jdW1lbnRvLWN1cnNvcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDgzXCI7XHJcbn1cclxuLmljb24tZ3JhZmljby10b3J0YTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDg0XCI7XHJcbn1cclxuLmljb24tbG9nby1wcm92aW5jaWE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA4NVwiO1xyXG59XHJcbi5pY29uLW1hbGV0aW4tc2FsdWQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA4NlwiO1xyXG59XHJcbi5pY29uLW1vbml0b3ItZXN0YWRpc3RpY2E6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZTA4N1wiO1xyXG59XHJcbi5pY29uLW1hbm9zLWRpbmVybzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxlMDg4XCI7XHJcbn1cclxuLmljb24tcGFjaWVudGUtZmxlY2hhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGUwODlcIjtcclxufVxyXG4iLCJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XHJcbiNsYXlvdXRbdHlwZT1sYXRlcmFsXSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQgLCBtaW5tYXgoNjB2dyAsIDFmcikpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XHJcbn07XHJcblxyXG4jZnJpc28ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAuMjU7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuXHJcbiNtYXBhIHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcclxufVxyXG5cclxuI2xhdGVyYWwge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBncmlkLXJvdzogMSAvIC0xO1xyXG59IiwiLy8gVmFyaWFibGVzXHJcbiRhbmRlcy1henVsLW9zY3VybzogIzA2MjgzNzsgXHJcbiRhbmRlcy1henVsOiAjMkNBMkRBOyBcclxuJGFuZGVzLWNlbGVzdGU6ICM2NkRGRkY7IFxyXG4kYW5kZXMtcHVycHVyYTogIzY2MjQ4MjsgXHJcbiRhbmRlcy1tYWdlbnRhOiAjRUExRTc5O1xyXG4kYW5kZXMtdmVyZGU6IHllbGxvd2dyZWVuO1xyXG4kYW5kZXMtbmFyYW5qYTogb3JhbmdlO1xyXG5cclxuLy8gRGVncmFkZVxyXG4kYW5kZXMtZGVncmFkZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA5ZGM5LCM4NTMxODgsICNmNGE0N2UpO1xyXG5cclxuJHpvbmEtbWV0cm9wb2xpdGFuYTogY3JpbXNvbjtcclxuJHpvbmEtdW5vOiByZ2IoMTAsIDkwLCAxMTcpO1xyXG4kem9uYS1kb3M6ICMyODZiMGQ7XHJcbiR6b25hLXRyZXM6IHJnYigxODcsIDIxLCAxNzMpO1xyXG4kem9uYS1jdWF0cm86IHJnYigxMTYsIDE1LCAxMTYpO1xyXG5cclxuLy8gRXNwYWNpYWRvXHJcbiRwYWRkaW5nOiAxNXB4OyJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jsantarelli\Desktop\ANDES\Interfaces\andes-map\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map