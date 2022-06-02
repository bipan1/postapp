import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    type : "service_account",
    project_id: "bipandemo-4f086",
    private_key_id: "75183030ad169ead524f8bfa2e834da513d33a2e",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCj4XWlQHVCenuC\nmxNttQhEzfD4VO8i6As3kGp0J6CWfQkP+SkRM7jRuXmg2zundp0gx0E2H3EAWYDd\nJZa9z1c9aI1AmLnlocFuDFnIO8FkOZxWCkgX5tbMZmtrYXMHtfIlBO+YX8TfarjT\n9Ea2HkuJQZaNumWzmJ+3owwF8Js6++Em9meNkL5kVzGlmMsTWZNay9Knu7yZUAbX\nExym6MG4PVZZR6ALxvBwPplEaSOfpI+FvHjglUmftQ9WtqhgbhRosRBBZx46Oonx\n9+uaKHG3KaNLsR6yhWvAxZoH7CIK9HsFAlXjH+jXuNGAHFBEiebgyzRUbd/6rV8n\n3tpgncpDAgMBAAECggEAFj18t8Z9o1338QuWoWbWDnBcaXctVPFkxE+nAsh19LZX\nSoGn3xvD00J2jSvzdpCUVmR0JyIxNbjv0hNN18iRsFXGBaQ0ZkODeqnWbWQepLlk\nzBBtJEFBmU+0+EerUrqQeBGpamZk02UqXClkh0apPaFXCzjmoG7wDf3kndG/X0uj\n8v4GvO1aFKmB025Y0oCUi/Aoi42UKrCe18PW34X5crvQ/QGX7553Lt9SoezAvBdS\nTzgI4u4kp/e8ywjYJtVGMIDnwJwn8uk7vQ1AIGGXyF0u5Zvlz5eUIoMQFaQAQmva\njazs7nGPjptiIxB2gNi2C5gslFLAXosEYJZ0HYi3AQKBgQDPzOWgKmMKqZKyIB/H\nEpzreF04+IhpCFxmumsa/u6LBNM1PBXFCDQ9UOMKNbzqvBeOVOeMHBC6FxtWYNv8\nplYoTIcv3bFhkG8Yk8ms8BuAZnHcpt5oawjTyJDkiomhitXdQDIC+xaCi7H5RFAI\n8BShdkcuyIXa3ASik8Mz74+7gwKBgQDJ5KE40wdGo89r+qyH3TxAXUJuv25IcrTV\nWahVYHR1MrdVpiExCqRoPzwy+NCkoTtru0UtYzM7Ba6Y7lLHXkpvxZvowCo8fRa4\nvh2/KgekSsK8JNQ5uBrpFCYgmf45KbVbHrDROfC0EKXwKyTUN0tWN4FPnuwz06rI\nVWTMJfa6QQKBgHaIEweMhhhD6AixKE8+v8HVU5+2rOD0wvhaJ9QrTNiBtRRtpKFS\nb7H2HLvrMUrYZbtrlPSn4aa0nYRlFbcFDqpIFOjp1U+ouqZTTrvV7moMhbBugvke\n7NcZVgT3PVCnSBy/jIeEwC9RDgD4xYqDn9EGDc6S1T+lNwOhs7xBT0SPAoGAaCrU\nnFMVj/b5EId3+WnGqpbzrdyLdEnqz6HA3rwzmjyep0xeF8Wb6kWmM855KFggJoer\nO63RQwS9fx6IC2G1GlJlDQQJRshrrso44uc2pigErbp63YUGLXg969hIeQnyDp+Z\nL3qrnNxyIabBC9WzwzpEN+aRjHQLy+1zYnm8AYECgYEAjbO5GySQoc4T23CKcWuA\nPMtTrAy4mi54uLOlttXSVnbfDPxH+Pn0enfA6g16rAKNkyTjKQ83Kv+zcCMNANDl\n8IrF3nYz8sLWbINP34z0kVVVv5jkAlKFbPXMvP04ASW4w6KyICQhPMHckmMUwWwe\nH12+gml1fKffBr3QHE15LKs=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-d8gaw@bipandemo-4f086.iam.gserviceaccount.com",
    client_id: "104756046792173203331",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d8gaw%40bipandemo-4f086.iam.gserviceaccount.com"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
