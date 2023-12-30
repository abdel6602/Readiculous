const { create_club, get_club, get_club_by_id, getMemberIn } = require('../Models/Clubs.js') ;
const { createAdmin, createMember } = require ('../Models/Members.js');
const getUserById =  require('../Models/Users.js');

class ClubController {

    async createClub(req, res) {
        const { clubName, description, CreatorId, genreId } = req.body;
        //TODO: check if club name already exists
        const club = await get_club(clubName);
        if (club) {
            res.status(400).json({ message: "Club name already exists" })
            return;
        }
        const queryStatus = await create_club(clubName, description, CreatorId, genreId);
        if (queryStatus) {
            res.status(200).json({ message: "Club created successfully" })
        }
        else {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    async addAdmin(req, res) {
        const { club_id, user_id } = req.body;
        const isUserExists = await getUserById(user_id);
        const isClubExists = await get_club_by_id(club_id);
        if (isUserExists && isClubExists) {
            const queryStatus = await createAdmin(club_id, user_id);
            if (queryStatus) {
                res.status(200).json({ message: "Admin added successfully" });
            }
            else {
                res.status(500).json({ message: "Internal server error" });
            }
        }
        else {
            res.status(400).json({ message: "User or club does not exist" });
        }
    }

    async addMember(req, res) {
        const { user_id, club_id } = req.body;

        const isUserExists = await getUserById(user_id);
        const isClubExists = await get_club_by_id(club_id);

        if(await getMemberIn(club_id, user_id)){
            res.status(400).json({ message: "User is already a member" });
            return;
        }

        if (isUserExists && isClubExists) {
            const queryStatus = await createMember(club_id, user_id);
            if (queryStatus) {
                res.status(200).json({ message: "Member added successfully" });
            }
            else {
                res.status(500).json({ message: "Internal server error" });
            }
        }
        else {
            res.status(400).json({ message: "User or club does not exist" });
        }
    }

    async getMemebers(req, res) {

    }

    async getClubs(req, res) {

    }

    async assignBookOfTheMonth(req, res) {

    }
}

module.exports = ClubController