import { connectMongoose } from "connectMongoose";
import { Router } from "express";
import { Invite, Rsvp } from "../models/rsvp";

export const router = Router();

router.post('/api', async (req, res) => {
    try {
        const { name, familyName, guestsNumber, isAttending }: Invite = req.body;

        await connectMongoose();
        console.log('mongoose connection established');
        const userData = await Rsvp.create({ name, familyName, guestsNumber, isAttending });
        res.status(201).send({ userData })
    } catch (error) {
        console.log('Failed to create RSVP:', error);
        res.status(500).send('Failed to create RSVP');
    }
});

router.get('/all-guests', async (req, res) => {
    try {
        await connectMongoose();
        const allGuests = await Rsvp.find();
        res.send({allGuests})
    } catch (error) {
        console.log('failed to get Guests list'); 
        res.send({allGuests: undefined})
    }

})
