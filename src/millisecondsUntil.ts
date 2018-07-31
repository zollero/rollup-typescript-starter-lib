
export default function millisecondsUntil(date: Date) {
	return date.valueOf() - Date.now();
}