import { LikeComponent } from "./like.component";


describe('LikeComponent', () => {
    let like: LikeComponent;

    beforeEach(() => {
        like = new LikeComponent();
    })

    it('should toggle iLike', () => {
        like.iLike = true
        like.click()
        expect(like.iLike).toBe(false)
    })


    it('if iLike is false should increase the # of total likes', () => {
        like.iLike = false
        const oldLikes = like.totalLikes
        like.click()
        expect(like.totalLikes).toBe(oldLikes+1)
    })

    it('if iLike is true should decrease the # of total likes', () => {
        like.iLike = true
        const oldLikes = like.totalLikes
        like.click()
        expect(like.totalLikes).toBe(oldLikes-1)
    })
})