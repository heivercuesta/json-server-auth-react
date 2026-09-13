const bcrypt = require('bcryptjs');

/**
 * Script utilitario para generar hashes de contraseñas de forma manual.
 * Util para crear registros iniciales dentro de db.json.
 */
const generateHash = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(`Contraseña plana: ${password}`);
  console.log(`Hash generado:    ${hashedPassword}`);
  return hashedPassword;
};

generateHash('Password123*');
