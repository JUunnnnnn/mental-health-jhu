export const dimensions = ['Mood','Classwork','Connection','Rest','Nourishment'];
export function score(values) {
  if (!Array.isArray(values) || values.length !== 5 || values.some(v=>!Number.isInteger(v)||v<0||v>4)) throw new Error('Five answers from 0 to 4 are required');
  return Math.round(values.reduce((a,b)=>a+b,0)/20*100);
}
export function overdue(entries, now=Date.now()) {
  return !entries.length || now - new Date(entries.at(-1).date).getTime() >= 7*86400000;
}
export function safetyPositive(answers) { return answers.some(a=>a !== 'No'); }
export const background = [
 ['Have you ever experienced mental or emotional health challenges that significantly affected your daily life?',['No','Yes, in the past','Yes, currently','Prefer not to answer']],
 ['Have you ever been diagnosed by a healthcare professional with a mental health condition?',['No','Yes','Unsure','Prefer not to answer']],
 ['Have you ever experienced thoughts of suicide or intentionally harming yourself?',['Never','In the past, but not recently','Recently','Currently','Prefer not to answer']],
 ['To what extent have stress, emotional difficulties, or mental health concerns affected your academic performance?',['Not at all','Slightly','Moderately','Significantly','Extremely']],
 ['How often do you have meaningful social interactions with people you feel connected to?',['Daily','Several times a week','About once a week','A few times a month','Rarely or never']],
 ['How strong is your current support system when you are going through a difficult time?',['Very strong','Strong','Moderate','Limited','I feel I have no reliable support']],
 ['How comfortable are you talking to someone you trust when you are struggling emotionally?',['Very comfortable','Somewhat comfortable','Neutral','Somewhat uncomfortable','Very uncomfortable']],
 ['How would you describe your typical academic workload and its stress?',['Very manageable','Mostly manageable','Sometimes overwhelming','Frequently overwhelming','Almost always overwhelming']],
 ['How much pressure do you place on yourself to succeed academically or professionally?',['Very little','A little','Moderate','A lot','An extreme amount']],
 ['How would you describe your typical sleep during the academic term?',['Consistent and restful','Usually adequate','Sometimes insufficient or disrupted','Frequently insufficient or disrupted','Severely disrupted']],
 ['How often do financial concerns, including tuition, housing, food, or employment, cause significant stress?',['Never','Rarely','Sometimes','Often','Very often']],
 ['How comfortable and connected do you feel within your college community?',['Very connected','Somewhat connected','Neutral','Somewhat isolated','Very isolated']],
 ['Do responsibilities outside academics regularly contribute to stress? Think athletics, clubs, work, caregiving, relationships, or health.',['No','Yes, occasionally','Yes, moderately','Yes, significantly','Prefer not to answer']],
 ['Have you previously sought support for your mental or emotional health?',['No','Yes, from friends or family','Yes, from a counselor or therapist','Yes, from another healthcare professional','Yes, through multiple sources','Prefer not to answer']],
 ['When you experience significant stress, how confident are you in your ability to cope in healthy ways?',['Very confident','Somewhat confident','Neutral','Not very confident','Not at all confident']]
];
export const daily = [
 ['How have you been feeling emotionally today?',['Very low','Low','Mixed','Good','Very good']],
 ['How manageable do classes and extracurricular commitments feel today?',['Overwhelming','Difficult','Mixed','Manageable','Very manageable']],
 ['How connected and supported do you feel today?',['Very isolated','Somewhat isolated','Neutral','Connected','Very connected']],
 ['How restorative was your sleep?',['Not at all','A little','Somewhat','Mostly','Very']],
 ['How well have you been able to meet your food and hydration needs today?',['Not at all','A little','Somewhat','Mostly','Fully']]
];
export const monthlyDimensions = ['Emotional wellbeing','Academic impact','Social connection','Support system','Academic workload','Academic pressure','Sleep','Food and hydration','Financial pressure','Campus connection','Comfort sharing','Healthy coping'];
export const monthly = [
 daily[0],
 [background[3][0],[...background[3][1]].reverse()],
 [background[4][0],[...background[4][1]].reverse()],
 [background[5][0],[...background[5][1]].reverse()],
 [background[7][0],[...background[7][1]].reverse()],
 [background[8][0],[...background[8][1]].reverse()],
 [background[9][0],[...background[9][1]].reverse()],
 daily[4],
 [background[10][0],[...background[10][1]].reverse()],
 [background[11][0],[...background[11][1]].reverse()],
 [background[6][0],[...background[6][1]].reverse()],
 [background[14][0],[...background[14][1]].reverse()]
];
export function monthlyScore(values) {
  if (!Array.isArray(values) || values.length !== monthly.length || values.some(v=>!Number.isInteger(v)||v<0||v>4)) throw new Error('Monthly review answers must be 0 to 4');
  return Math.round(values.reduce((a,b)=>a+b,0)/(monthly.length*4)*100);
}
export function monthlyDue(reviews, now=Date.now()) {
  return !reviews.length || now-new Date(reviews.at(-1).date).getTime() >= 28*86400000;
}
