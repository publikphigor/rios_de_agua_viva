export default function Declaration() {
  let declarations = [
    {
      title: "LA BIBLIA ES INSPIRADA",
      message: `Las escrituras de toda la Biblia son verbalmente inspiradas por Dios. No solamente
          las ideas fueron inspiradas; aun las palabras usadas fueron inspiradas, pues los
          escritores originales fueron movidos por Dios a escribir lo que Él quería que ellos
          digieran. Por tanto, creemos que: (1) las escrituras son la revelación que Dios ha
          dado de sí mismo a la humanidad, (2) son infalibles (nunca se equivocan), y (3) son la
          guía divinamente autorizada de nuestra fe, creencia, y manera de vivir (2 Timoteo
          3:15-17; 1 Tesalonicenses 2:13; 2 Pedro 1:21).`,
    },
    {
      title: "EL ÚNICO DIOS VERDADERO",
      message: `Hay un único Dios verdadero. Se ha revelado como el que siempre ha existido sin
          agente o causa externa que lo formara (Isaías 43:10). Él es el Creador del Cielo y de
          la Tierra (Génesis 1:1) y el Único que redime, salva, o rescata a la humanidad del
          pecado y de sus dolorosas consecuencias (Isaías 43:11). Dios se ha revelado también
          como un solo Ser (Deuteronomio 6:4) que consiste en tres personas
          interrelacionadas. El Padre, el Hijo, y el Espíritu Santo (Mateo 28:19, Lucas 3:22). Este
          concepto de un solo Dios o Ser en tres personas se expresa con la palabra Trinidad.`,
    },
    {
      title: "EL SEÑOR JESUCRISTO ES PLENAMENTE DIOS",
      message: `El Señor Jesucristo, el Hijo de Dios, siempre ha existido. El tampoco tiene principio ni
          fin (Apocalipsis 1:8). Para completar su misión de sacrificio terrenal, se hizo hombre
          al nacer de una virgen, concebido por el Espíritu Santo (Mateo 1:23; Lucas 1:31, 35).
          Vivió una vida perfecta, absolutamente sin pecado (Hebreos 7:26; 1 Pedro 2:22).
          Mientras estuvo en la tierra obro muchos milagros por medio de la unción del
          Espíritu Santo (Hechos 2:22, 10:38). Para restaurar a la humanidad caída, murió en la
          Cruz como sustitutos por los pecados de cada persona (1 Corintios 15:3; 2 Corintios
          5:21). Fue levantado de los muertos por el poder sobrenatural de Dios (Mateo28:6;
          Lucas 24:39; 1 Corintios 6:14, 15:4). Desde su resurrección, ha sido exaltado (honrado),
          y está sentado a la mano derecha de Dios (Hechos 1:9, 11, 2:33; Filipenses 2:9-11;
          Hebreos 1:3).`,
    },
    {
      title: "LA CAÍDA DEL HOMBRE",
      message: `La humanidad fue creada buena y recta; pues Dios dijo: “Hagamos al ser humano a
          nuestra imagen y semejanza”. Sin embargo, la humanidad, por voluntar propia, no
          hizo caso a las instrucciones de Dios... y decidió hacer lo que sabia que era malo y
          equivocado. En consecuencia, la humanidad cayó de la inocencia y la bondad, e
          incurrió asi, no solo en la muerte física, sino también en la espiritual, la cual es la
          separación de Dios (Génesis 1:26-27, 2:17; Romanos 5:12-19).`,
    },
    {
      title: `LA SALVACIÓN DEL HOMBRE (*una de las
              cuatro doctrinas cardinales).`,
      message: `La salvación es la liberación de la muerte espiritual y de la esclavitud del pecado.
          Dios da Salvación a todo el que cree en Él y acepta su oferta gratuita de perdón. La
          única esperanza de redención de la humanidad del estado caído de pecado es
          mediante la sangre de Jesucristo, el Hijo de Dios – sangre que fue derramada al
          morir Jesús en la Cruz. (El relato de la crucifixión es hecho por cuatro de sus
          contemporáneos: Mateo (Capitulo 27), Marcos (Capitulo 15), Lucas (Capitulo 23), y
          Juan (Capitulo 19)). La experiencia de Salvación, una persona recibe salvación
          
          cuando (1) se arrepiente ante Dios de sus pecados y de su naturaleza e inclinaciones
          pecaminosas, y (2) cree o tiene fe en hecho de que la muerte y la resurrección
          (restauración sobrenatural a la vida) de Jesús le borran los pecados y le da perdón.
          Al poner la fe en el amor y la salvación gratuita de Dios, uno experimenta el lavado
          de la regeneración (o nuevo nacimiento espiritual), la obra renovadora del Espíritu
          Santo, y es declarado Justo (recto delante de Dios). Regeneración, renovación y
          justificación (justificados o hechos rectos delante de Dios) son palabras que
          describen lo que ocurre en la salvación. En el momento de la Salvación, una
          persona se hace heredero de la esperanza de esta vida eterna prometida por Dios
          (Lucas 24:27; Juan 3:3; Romanos 10:13-15; Efesios 2:8; Tito 2:11, 3:5-7).`,
    },
    {
      title: "LAS ORDENANZAS DE LA IGLESIA",
      message: `Algunas iglesias usan el término sacramentos en vez de ordenanzas. Sin embargo,
          para algunas personas, sacramentos transmite la idea de que se produce una obra
          espiritual en el individuo cuando se recibe o se experimenta el sacramento.
          Las Asambleas de Dios deciden llamar bautismo y la Santa Cena ordenanzas, por
          son prácticas religiosas ordenadas o establecidas por Jesús mismo. Al cumplir estos
          deberes espirituales, se recuerda a los cristianos una obra importante que ya tuvo
          lugar en el corazón del creyente.`,
    },
  ];

  return (
    <div className="w-full mx-auto md:w-4/5 px-[24px] md:px-0 py-[50px]">
      <h1 className="pb-2 text-5xl font-normal border-b-4 md:font-bold text-primary border-primary">
        Declaration
      </h1>
      <ol>
        {declarations.map((item, i) => {
          <li key={i}>
            {item.title}
            {item.message}
          </li>;
        })}
      </ol>
    </div>
  );
}
