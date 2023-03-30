import { Router } from "express";
import { Invite, Rsvp } from "../models/rsvp";

export const router = Router();

router.post('/api/rsvp', async (req, res) => {
    try {
        const { name, familyName, guestsNumber, isAttending }: Invite = req.body;
        const userData = { name, familyName, guestsNumber, isAttending };
        await Rsvp.create(userData);
        console.log('מוזמן נרשם במאגר המידע בהצלחה');
        res.status(201).send({userData})
    } catch (error) {
        console.log('failed to create rsvp', error);
    }
});