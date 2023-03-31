import { connectMongoose } from "connectMongoose";
import { Router } from "express";
import { Invite, Rsvp } from "../models/rsvp";

export const router = Router();

router.post('/api', async (req, res) => {
    try {
        const { name, familyName, guestsNumber, isAttending }: Invite = req.body;

        console.log('Incoming request:', req.body);
        await connectMongoose();
        console.log('mongoose connection established');
        const userData = await Rsvp.create({ name, familyName, guestsNumber, isAttending });

        console.log('User data created:', userData);

        res.status(201).send({ userData })
    } catch (error) {
        console.log('Failed to create RSVP:', error);
        res.status(500).send('Failed to create RSVP');
    }
});
