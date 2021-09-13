import { VoterComponent } from "./voter.component";


describe('VoterComponent', () => {
    let voter: VoterComponent;

    beforeEach(() => {
        voter = new VoterComponent();
    })

    it('if myVote is 0, increase myVote by 1', () => {
        voter.myVote = 0
        voter.upVote()
        expect(voter.myVote).toBe(1)
    })

    it('if myVote is -1, increase myVote by 1', () => {
        voter.myVote = -1
        voter.upVote()
        expect(voter.myVote).toBe(0)
    })

    it('if myVote is 1, return the same value', () => {
        voter.myVote = 1
        voter.upVote()
        expect(voter.myVote).toBe(1)
    })
})

describe('downVote', () => {
    let voter:VoterComponent = new VoterComponent();

    it('if myVote is 1, decrease myVote by 1', () => {
        voter.myVote = 1
        voter.downVote()
        expect(voter.myVote).toBe(0)
    })

    it('if myVote is 0, decrease myVote by 1', () => {
        voter.myVote = 0
        voter.downVote()
        expect(voter.myVote).toBe(-1)
    })

    it('if myVote is -1, return the same value', () => {
        voter.myVote = -1
        voter.downVote()
        expect(voter.myVote).toBe(-1)
    })
})

describe('totalVotes', () => {
    let voter:VoterComponent = new VoterComponent();

    it('function called, should be returned summary of myvote and othersvote', () => {
        const summary = voter.totalVotes
        expect(summary).toBe(voter.myVote + voter.othersVote)
    })
})