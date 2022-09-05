import aboutImage from "../assets/john.jpg";

function Card(props) {
  return (
    <div className="p-[24px] rounded-md text-white bg-primary">
      <h2 className="mb-4 text-3xl">{props.name}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default function About() {
  return (
    <section className="w-full px-[24px] md:w-4/5 mx-auto pt-[50px]">
      <div className="flex flex-col items-center justify-start gap-5 md:flex-row md:justify-between">
        <div className="w-full md:w-1/2">
          <img src={aboutImage} alt="About Image" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="pb-2 mb-2 text-5xl font-semibold border-b-4 text-primary border-primary">
            Gracias por visitarnos
          </h1>
          <p>
            Dios te bendiga, Somos Segunda Iglesia Rios de Agua Viva, si tu vives en el area de
            Perth Amboy NJ y aún no tienes una iglesia donde fortalecer tu fe, para nosotros sera un
            honor, un privilegio poder recibirte y adorar juntos a nuestro Señor.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-10 md:flex-row md:justify-center">
        <Card
          name="Misión"
          text="“Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del
            Hijo, y del Espíritu Santo;” S. Mateo 28:19.
            Nuestra misión está basada en la ordenanza de nuestro Señor.
            En respuesta a la voluntad de Dios que todos escuchen el evangelio y puedan ser salvos, nos hemos
            establecido en esta ciudad para poder predicar libertad a los cautivos, para traer esperanza a los
            perdidos, sanar los corazones quebrantados y restablecer todo lo que el enemigo a destruid."
        />
        <Card
          name="Visión."
          text="“El que cree en mí, como dice la Escritura, de su interior correrán ríos de agua viva.”
            S. Juan 7:38

            Nuestra visión como iglesia es que todos los que por la fe crean en el Señor experimente los Rios de
            Agua Viva, que el Espíritu Santo transforme su vida de tal manera que se convierta en un discípulo de

            Cristo, enteramente preparado para toda buena obra."
        />
      </div>
    </section>
  );
}
