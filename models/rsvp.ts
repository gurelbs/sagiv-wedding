import { connection, Schema } from "mongoose";

export interface Invite {
    name: string;
    familyName: string;
    guestsNumber: number;
    isAttending: string;
}

const rsvpSchema = new Schema<Invite>({
    name: { type: String, required: true },
    familyName: { type: String, required: true},
    guestsNumber: { type: Number, required: true },
    isAttending: { type: String, required: true },
});
  
export const Rsvp = connection.model('Rsvp', rsvpSchema);