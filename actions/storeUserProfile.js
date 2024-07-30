import { sql } from '@vercel/postgres';
import getEmailId from '@/actions/getEmailId'

const storeUserProfile = async (data) => {
    try {
        await sql  `
            CREATE TABLE IF NOT EXISTS farmtotable_profile (
                user_id INT NOT NULL,
                user_email VARCHAR(255) UNIQUE NOT NULL,
                name VARCHAR(255) NOT NULL,
                state VARCHAR(255) NOT NULL,
                district VARCHAR(255) NOT NULL,
                pincode INT NOT NULL,
                address VARCHAR(1000),
                FOREIGN KEY (user_id) REFERENCES farmtotable_users (id),
                FOREIGN KEY (user_email) REFERENCES farmtotable_users (email)
            )
        `;
        await sql `
            INSERT INTO farmtotable_profile (name, state, district, pincode,address)
            VALUES (${data.name},${data.state},${district},${pincode},${address}) where email=${}
        `;

    } catch (error) {
        
    }
}

export default storeUserProfile