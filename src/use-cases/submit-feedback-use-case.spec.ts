import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => { } },
    { sendMail: async () => { } }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {

       await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64,testandoaquimeutio',
        })).resolves.not.toThrow();
    });
    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64,testandoaquimeutio',
        })).rejects.toThrow();
    })
    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,testandoaquimeutio',
        })).rejects.toThrow();
    })
    it('should not be able to submit feedback with wrong screenshot-type', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: '321data:image/png;base64,testandoaquimeutio',
        })).rejects.toThrow();
    })
})