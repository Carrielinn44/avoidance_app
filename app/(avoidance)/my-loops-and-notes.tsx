import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../lib/colors';
import { getLoops, getDrafts, getPlans, getReflections, getAnchor } from '../../lib/storage';


export default function MyLoopsAndNotes() {
const [data, setData] = useState<{ loops: any[]; drafts: any[]; plans: any[]; reflections: any[]; anchor: any | null }>({ loops: [], drafts: [], plans: [], reflections: [], anchor: null });


useEffect(() => {
(async () => {
const [loops, drafts, plans, reflections, anchor] = await Promise.all([getLoops(), getDrafts(), getPlans(), getReflections(), getAnchor()]);
setData({ loops, drafts, plans, reflections, anchor });
})();
}, []);


return (
<ScrollView style={mln.container}>
<View style={mln.section}>
<Text style={mln.h}>My Anchor</Text>
<Text style={mln.p}>{data.anchor ? `${data.anchor.label}` : 'No anchor yet.'}</Text>
</View>
<View style={mln.section}>
<Text style={mln.h}>My Loops</Text>
{data.loops.map(l => (<Text key={l.id} style={mln.p}>• {l.label}: {l.steps.join(' → ')}</Text>))}
{data.loops.length === 0 && <Text style={mln.p}>No loops saved yet.</Text>}
</View>
<View style={mln.section}>
<Text style={mln.h}>Saved Truth Drafts</Text>
{data.drafts.map(d => (<Text key={d.id} style={mln.p}>• {d.text}</Text>))}
{data.drafts.length === 0 && <Text style={mln.p}>No drafts yet.</Text>}
</View>
<View style={mln.section}>
<Text style={mln.h}>Action Plans</Text>
{data.plans.map(p => (<Text key={p.id} style={mln.p}>• {p.title}: {p.steps?.length || 0} steps</Text>))}
{data.plans.length === 0 && <Text style={mln.p}>No plans yet.</Text>}
</View>
<View style={mln.section}>
<Text style={mln.h}>Reflections</Text>
{data.reflections.map(r => (<Text key={r.id} style={mln.p}>• {r.text}</Text>))}
{data.reflections.length === 0 && <Text style={mln.p}>No reflections yet.</Text>}
</View>
</ScrollView>
);
}


const mln = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
section: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 16, marginBottom: 12 },
h: { color: colors.text, fontSize: 18, fontWeight: '600', marginBottom: 8 },
p: { color: colors.textDim, marginBottom: 6 },
});//
//  my-loops-and-notes.tsx
//  
//
//  Created by Carrie Wilson on 8/24/25.
//

