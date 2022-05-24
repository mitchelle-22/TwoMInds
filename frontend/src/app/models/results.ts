export interface Result{
    id: number,
    Answers: string[],
    AssessmentFK: string,
    PatientResultFK: number,
    active: string,
    assessmentTaken: number,
    feedback: string,
    rate: number,
    status: string,
}