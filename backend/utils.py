import numpy as np
import mediapipe as mp

mp_holistic = mp.solutions.holistic

def extract_keypoints(results):
    pose = (
        np.array([[lm.x, lm.y, lm.z] for lm in results.pose_landmarks.landmark])
        if results.pose_landmarks
        else np.zeros((33, 3))
    )

    lh = (
        np.array([[lm.x, lm.y, lm.z] for lm in results.left_hand_landmarks.landmark])
        if results.left_hand_landmarks
        else np.zeros((21, 3))
    )

    rh = (
        np.array([[lm.x, lm.y, lm.z] for lm in results.right_hand_landmarks.landmark])
        if results.right_hand_landmarks
        else np.zeros((21, 3))
    )

    return np.concatenate([
        pose.flatten(),
        lh.flatten(),
        rh.flatten()
    ])