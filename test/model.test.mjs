import {test} from 'node:test';
import assert from 'node:assert/strict';
import {score,overdue,safetyPositive,background,daily,monthly,monthlyScore,monthlyDue} from '../web/model.js';
test('index endpoints and equal weighting',()=>{assert.equal(score([0,0,0,0,0]),0);assert.equal(score([4,4,4,4,4]),100);assert.equal(score([0,1,2,3,4]),50);assert.throws(()=>score([4,4]));assert.throws(()=>score([4,4,4,4,5]));});
test('weekly reminder boundary and newest check-in',()=>{const now=Date.UTC(2026,8,17);assert.equal(overdue([],now),true);assert.equal(overdue([{date:new Date(now-7*86400000).toISOString()}],now),true);assert.equal(overdue([{date:new Date(now-6*86400000).toISOString()}],now),false);});
test('safety refusal and positive answers require follow-up',()=>{assert.equal(safetyPositive(['No','No','No','No']),false);assert.equal(safetyPositive(['No','Yes','No','No']),true);assert.equal(safetyPositive(['No','Prefer not to answer','No','No']),true);});
test('background and repeat surveys have expected lengths',()=>{assert.equal(background.length,15);assert.equal(daily.length,5);});
test('monthly review uses an extended 0–100 index and a 28-day cadence',()=>{assert.equal(monthly.length,12);assert.equal(monthlyScore(Array(12).fill(0)),0);assert.equal(monthlyScore(Array(12).fill(4)),100);assert.throws(()=>monthlyScore([4,4]));const now=Date.UTC(2026,8,17);assert.equal(monthlyDue([],now),true);assert.equal(monthlyDue([{date:new Date(now-28*86400000).toISOString()}],now),true);assert.equal(monthlyDue([{date:new Date(now-27*86400000).toISOString()}],now),false);});
