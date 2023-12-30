const connectToDatabase = require( "./database.js");

async function addMember(member_id,club_id) {
    const connection = await connectToDatabase();
    try {
        await connection.query(
            `INSERT INTO join_club (members_id,club_id)
            VALUES (?,  ?)`, [member_id,club_id]
        )
        return true;
    }
    catch (error) {
        console.log("from add_member function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}
async function deleteMember(member_id,club_id){
    const connection = await connectToDatabase();
    try {
        await connection.query(
            `DELETE FROM join_club WHERE members_id=? and club_id=?`, [member_id,club_id]
        )
        return true;
    }
    catch (error) {
        console.log("from deleteMember function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}

async function getMembers(club_id){
    const connection = await connectToDatabase();
    try {
        const members:Query = await connection.query(
            `SELECT * 
             FROM members
             JOIN join_club ON membership_id = join_club.members_id 
             WHERE join_club.club_id=?`, [club_id]
        )
        return members[0][0];
    }
    catch (error) {
        console.log("from getMembers function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}
async function getClubByMemberId(member_id){
    const connection = await connectToDatabase();
    try {
        const club : Query =await connection.query(
            'SELECT club_id FROM join_club WHERE  members_id=?',[member_id]
        )
        return club[0]
    }
    catch (error) {
        console.log("from getClubByMemberId function: " + error.message);
        return false;
    }
    finally {
        connection.close();
    }
}

module.exports = {addMember,deleteMember,getMembers,getClubByMemberId};