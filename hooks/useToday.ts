import { useEffect, useState } from "react";
import { ensureStartDate, getTodayPayload, TodayPayload } from "../lib/progress";


export function useToday() {
const [loading, setLoading] = useState(true);
const [today, setToday] = useState<TodayPayload | null>(null);


useEffect(() => {
let ignore = false;
(async () => {
await ensureStartDate();
const t = await getTodayPayload();
if (!ignore) { setToday(t); setLoading(false); }
})();
return () => { ignore = true; };
}, []);


return { loading, today, refresh: async () => setToday(await getTodayPayload()) };
}