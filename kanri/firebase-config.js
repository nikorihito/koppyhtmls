import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxrCemlTu34n4hcE7inZI5YFtCIDGQR_k",
  authDomain: "mamokids-ad530.firebaseapp.com",
  projectId: "mamokids-ad530",
  storageBucket: "mamokids-ad530.firebasestorage.app",
  messagingSenderId: "521123153861",
  appId: "1:521123153861:web:7c0a15a345c7ac03fc6dac",
  measurementId: "G-0YS6D7BSEB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { serverTimestamp };

export const ROLE_LABELS = {
  parent: "保護者用",
  child: "子供用",
  admin: "管理者"
};

export const ITEM_TYPE_LABELS = {
  warning: "警告用ボタン管理",
  toggle: "オンオフ管理（保護者操作）",
  text: "子供記述式管理"
};

export function normalizeAccountId(value) {
  return String(value || "").trim().toLowerCase();
}

export function accountIdToEmail(accountId) {
  return `${normalizeAccountId(accountId)}@mamokids.local`;
}

export function nl2br(value) {
  return String(value || "").replace(/\n/g, "<br>");
}

export function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function chatKey(uid1, uid2) {
  return [uid1, uid2].sort().join("__");
}
