import "./form.css";

export default function ContactMe() {
   return (
      <div className="formContent">
         <form action="#" className="form">
            <div>
               <input
                  type="text"
                  placeholder="Nombre Completo"
                  id="names"
                  name="names"
                  className="formInput"
               />
               <input
                  type="text"
                  placeholder="Correo Electrónico"
                  id="email"
                  name="email"
                  className="formInput"
               />
            </div>
            <textarea
               name="comment"
               id="comment"
               rows="10"
               placeholder="Escriba aquí su mensaje"
               className="formMessage"
            ></textarea>
            <button className="formbuttom">Submit</button>
         </form>
      </div>
   );
}
