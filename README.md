# IonicProvincias

El proyecto se basa en hacer un GET a la API de las provincias y listar dichos datos mediante el metodo FOR de angular.

El GET se puede visualizar en "data-services".

Se pueden visualizar los detalles de la provincias con un modal (ModalController) que se le pasa la data de la provincia seleccionada al presionar el icono ubicado a la derecha de la provincia.

Posee angular guard, con un login "ficticio" ya que si colocamos "url/home" nos va a redirigir al login para "iniciar sesion".

Dicho guard se puede localizar en guard/auth.guard y se utiliza el service authService para las funciones de moverse entre pantallas con router.

Para el search de las provincias se utilizaron los Pipes de angular que se le pasa el texto para retornar los array con las provincias.
