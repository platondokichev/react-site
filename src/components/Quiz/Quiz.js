import './Quiz.css';
import React from 'react';
import { useState } from "react";

export const Quiz = () => {
    const questions = [
        {
            questionText: 'Где придумали наш маркетплейс?',
            answerOptions: [
                { answerText: "Москва", isCorrect: false },
                { answerText: "Санкт-Петербург", isCorrect: false },
                { answerText: "Самара", isCorrect: false },
                { answerText: "Уфа", isCorrect: true }
            ]
        },
        {
            questionText: 'Когда открылся наш маркетплейс?',
            answerOptions: [
                { answerText: "2022", isCorrect: false },
                { answerText: "2019", isCorrect: false },
                { answerText: "2024", isCorrect: true },
                { answerText: "2018", isCorrect: false }
            ]
        },
        {
            questionText: 'Где находится наш основной склад?',
            answerOptions: [
                { answerText: "Уфа", isCorrect: false },
                { answerText: "Челябинск", isCorrect: true },
                { answerText: "Калининград", isCorrect: false },
                { answerText: "Москва", isCorrect: false }
            ]
        },
        {
            questionText: 'Кто основатель нашего маркетплейса?',
            answerOptions: [
                { answerText: "Докичев Платон", isCorrect: true },
                { answerText: "Смирнов Никита", isCorrect: false },
                { answerText: "Гареев Кирилл", isCorrect: false },
                { answerText: "Вавилонов Евгений", isCorrect: false }
            ]
        },
        {
            questionText: 'Мы доставляем товары по?',
            answerOptions: [
                { answerText: "Америке", isCorrect: false },
                { answerText: "России", isCorrect: true },
                { answerText: "Казахстану", isCorrect: false },
                { answerText: "Китаю", isCorrect: false }
            ]
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setQuizFinished(true);
        }
    };

    return (
        <div>
            <div className="quiz">
                {!quizFinished ? (
                    <>
                        <div className='question_section'>
                            <div className="question_count">
                                <span>Вопрос {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question_text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className="answer_section">
                            {questions[currentQuestion].answerOptions.map(item => (
                                <button
                                    className="answer_button"
                                    onClick={() => handleAnswerOptionClick(item.isCorrect)}
                                    key={item.answerText}
                                >
                                    {item.answerText}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="result_section">
                        <div className="score_section">
                            У вас {score} правильных ответов! Поздравляем!
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
