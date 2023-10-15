export default function Validation(form, setErrors) {
   const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/;
   const nameRegex = /^[A-Za-z]{4,}(([',. -][A-Za-z ])?[A-Za-z]*)*$/;
   const messageRegex = /^.{10,}$/;

   const newErrors = {};

   if (!form.user_name || !nameRegex.test(form.user_name)) {
      newErrors.user_name = "El nombre debe tener un mínimo de 4 caracteres";
   }

   if (!form.user_email || !emailRegex.test(form.user_email)) {
      newErrors.user_email = "Correo electrónico inválido";
   }

   if (!form.user_message || !messageRegex.test(form.user_message)) {
      newErrors.user_message = "El mensaje debe tener mínimo 10 caracteres";
   }

   setErrors(newErrors);
}
