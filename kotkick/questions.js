const questions = {
    1: {
        options: {
            "Soy trabajador": {
                R: 3,  // Responsabilidad
                D: 2   // Determinación
            },
            "No soy de humor variable": {
                N: 2,  // Nerviosismo
                A: 1   // Adaptabilidad
            }
        }
    },
    2: {
        options: {
            "Me gusta hacer el trabajo mejor que los demás": {
                C: 2,  // Creatividad
                T: 3   // Tendencia
            },
            "Me gusta seguir con lo que he comenzado hasta terminarlo": {
                R: 3,  // Responsabilidad
                D: 2   // Determinación
            }
        }
    },
    3: {
        options: {
            "Me gusta enseñar a la gente cómo hacer las cosas": {
                L: 3,  // Liderazgo
                S: 2   // Sensibilidad
            },
            "Me gusta hacer las cosas lo mejor posible": {
                C: 3,  // Creatividad
                D: 2   // Determinación
            }
        }
    },
    4: {
        options: {
            "Me gusta hacer cosas graciosas": {
                E: 3,  // Energía
                S: 2   // Sensibilidad
            },
            "Me gusta decir a la gente lo que tiene que hacer": {
                L: 3,  // Liderazgo
                R: 2   // Responsabilidad
            }
        }
    },
    5: {
        options: {
            "Me gusta unirme a grupos": {
                X: 3,  // Extroversión
                T: 2   // Tendencia
            },
            "Me gusta ser tomado en cuenta por los grupos": {
                B: 3,  // Bienestar
                G: 2   // Gusto
            }
        }
    },
    6: {
        options: {
            "Me gusta hacer un amigo íntimo": {
                N: 3,  // Nerviosismo
                A: 2   // Adaptabilidad
            },
            "Me gusta hacer amistad con el grupo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    },
    7: {
        options: {
            "Soy rápido en cambiar cuando lo creo necesario": {
                F: 3,  // Flexibilidad
                A: 2   // Adaptabilidad
            },
            "Intento hacer amigos íntimos": {
                N: 3,  // Nerviosismo
                S: 2   // Sensibilidad
            }
        }
    },
    8: {
        options: {
            "Me gusta 'devolverla' cuando alguien me ofende": {
                V: 3,  // Valores
                T: 2   // Tendencia
            },
            "Me gusta hacer cosas nuevas o diferentes": {
                A: 3,  // Adaptabilidad
                T: 2   // Tendencia
            }
        }
    },
    9: {
        options: {
            "Quiero que mi jefe me estime": {
                R: 3,  // Responsabilidad
                B: 2   // Bienestar
            },
            "Me gusta decir a la gente cuándo están equivocados": {
                L: 3,  // Liderazgo
                E: 2   // Energía
            }
        }
    },
    10: {
        options: {
            "Me gusta seguir las instrucciones que me dan": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta agradar a mis superiores": {
                B: 3,  // Bienestar
                G: 2   // Gusto
            }
        }
    },
    11: {
        options: {
            "Me esfuerzo mucho": {
                R: 3,  // Responsabilidad
                D: 2   // Determinación
            },
            "Soy ordenado. Pongo todo en su sitio": {
                O: 3,  // Organización
                C: 2   // Creatividad
            }
        }
    },
    12: {
        options: {
            "Consigo que la gente haga lo que yo quiero": {
                L: 3,  // Liderazgo
                X: 2   // Extroversión
            },
            "No me altero fácilmente": {
                N: 3,  // Nerviosismo
                S: 2   // Sensibilidad
            }
        }
    },
    13: {
        options: {
            "Me gusta decir al grupo lo que tiene que hacer": {
                L: 3,  // Liderazgo
                T: 2   // Tendencia
            },
            "Siempre continúo un trabajo hasta que está hecho": {
                R: 3,  // Responsabilidad
                D: 2   // Determinación
            }
        }
    },
    14: {
        options: {
            "Me gusta ser animado e interesante": {
                E: 3,  // Energía
                X: 2   // Extroversión
            },
            "Yo quiero tener mucho éxito": {
                T: 3,  // Tendencia
                V: 2   // Valores
            }
        }
    },
    15: {
        options: {
            "Me gusta 'encajar' con grupos": {
                X: 3,  // Extroversión
                T: 2   // Tendencia
            },
            "Me gusta ayudar a las personas a tomar decisiones": {
                L: 3,  // Liderazgo
                S: 2   // Sensibilidad
            }
        }
    },
    16: {
        options: {
            "Me preocupa cuando alguien no me estima": {
                N: 3,  // Nerviosismo
                B: 2   // Bienestar
            },
            "Me gusta que la gente note mi presencia": {
                E: 3,  // Energía
                X: 2   // Extroversión
            }
        }
    },
    17: {
        options: {
            "Me gusta probar cosas nuevas": {
                A: 3,  // Adaptabilidad
                T: 2   // Tendencia
            },
            "Prefiero trabajar con otras personas que solo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    },
    18: {
        options: {
            "Algunas veces culpo a otros cuando las cosas salen mal": {
                V: 3,  // Valores
                N: 2   // Nerviosismo
            },
            "Me molesta cuando no le gusto a alguien": {
                N: 3,  // Nerviosismo
                B: 2   // Bienestar
            }
        }
    },
    19: {
        options: {
            "Me gusta complacer a mis superiores": {
                B: 3,  // Bienestar
                R: 2   // Responsabilidad
            },
            "Me gusta intentar trabajos nuevos y diferentes": {
                A: 3,  // Adaptabilidad
                T: 2   // Tendencia
            }
        }
    },
    20: {
        options: {
            "Me gusta tener instrucciones detalladas para hacer un trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta decírselo a la gente cuando me enfada": {
                V: 3,  // Valores
                N: 2   // Nerviosismo
            }
        }
    },
    21: {
        options: {
            "Siempre me esfuerzo mucho": {
                R: 3,  // Responsabilidad
                D: 2   // Determinación
            },
            "Me gusta ir paso a paso con gran cuidado": {
                O: 3,  // Organización
                C: 2   // Creatividad
            }
        }
    },
    22: {
        options: {
            "Soy un buen 'dirigente'": {
                L: 3,  // Liderazgo
                R: 2   // Responsabilidad
            },
            "Organizo bien el trabajo de un puesto": {
                O: 3,  // Organización
                C: 2   // Creatividad
            }
        }
    },
    23: {
        options: {
            "Me enfado con facilidad": {
                N: 3,  // Nerviosismo
                V: 2   // Valores
            },
            "Soy lento tomando decisiones": {
                S: 3,  // Sensibilidad
                D: 2   // Determinación
            }
        }
    },
    24: {
        options: {
            "Me gusta trabajar en varias actividades al mismo tiempo": {
                T: 3,  // Tendencia
                F: 2   // Flexibilidad
            },
            "Cuando estoy en grupo me gusta estar callado": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    },
    25: {
        options: {
            "Me gusta ayudar a los demás a sentirse bien": {
                B: 3,  // Bienestar
                S: 2   // Sensibilidad
            },
            "Me gusta que la gente vea mi trabajo": {
                E: 3,  // Energía
                X: 2   // Extroversión
            }
        }
    },
    26: {
        options: {
            "Me gusta saber lo que tengo que hacer y hacerlo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Siempre trato de dar la mejor impresión posible": {
                B: 3,  // Bienestar
                G: 2   // Gusto
            }
        }
    },
    27: {
        options: {
            "Me gusta ser parte de un equipo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me molesta cuando la gente no me dice lo que quiere de mí": {
                N: 3,  // Nerviosismo
                B: 2   // Bienestar
            }
        }
    },
    28: {
        options: {
            "Me gusta corregir los errores que veo en los demás": {
                V: 3,  // Valores
                L: 2   // Liderazgo
            },
            "Trato de seguir las instrucciones que se me dan": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    29: {
        options: {
            "Me gusta demostrar mi entusiasmo": {
                E: 3,  // Energía
                X: 2   // Extroversión
            },
            "Me gusta ser detallista": {
                O: 3,  // Organización
                C: 2   // Creatividad
            }
        }
    },
    30: {
        options: {
            "Me gusta estar en un grupo de trabajo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta saber lo que tengo que hacer y hacerlo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    31: {
        options: {
            "Me gusta dar a los demás una oportunidad de explicar su punto de vista": {
                S: 3,  // Sensibilidad
                A: 2   // Adaptabilidad
            },
            "Me gusta tener metas claras para el trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    32: {
        options: {
            "Me gusta ser parte de un equipo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta mantener mi trabajo ordenado y al día": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    33: {
        options: {
            "Me gusta expresar mis opiniones de manera clara": {
                E: 3,  // Energía
                L: 2   // Liderazgo
            },
            "Me gusta seguir con un trabajo hasta terminarlo": {
                R: 3,  // Responsabilidad
                D: 2   // Determinación
            }
        }
    },
    34: {
        options: {
            "Me gusta ayudar a las personas a sentirse cómodas": {
                B: 3,  // Bienestar
                S: 2   // Sensibilidad
            },
            "Me gusta trabajar en proyectos que tienen un impacto": {
                C: 3,  // Creatividad
                T: 2   // Tendencia
            }
        }
    },
    35: {
        options: {
            "Me gusta asumir responsabilidades": {
                R: 3,  // Responsabilidad
                D: 2   // Determinación
            },
            "Me gusta que me den instrucciones claras": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    36: {
        options: {
            "Me gusta involucrarme en proyectos que desafíen mis habilidades": {
                A: 3,  // Adaptabilidad
                C: 2   // Creatividad
            },
            "Me gusta estar en el centro de la atención": {
                E: 3,  // Energía
                X: 2   // Extroversión
            }
        }
    },
    37: {
        options: {
            "Me gusta manejar equipos y proyectos": {
                L: 3,  // Liderazgo
                O: 2   // Organización
            },
            "Me gusta seguir procesos establecidos": {
                R: 3,  // Responsabilidad
                O: 2   // Organización
            }
        }
    },
    38: {
        options: {
            "Me gusta la variedad en mi trabajo": {
                A: 3,  // Adaptabilidad
                T: 2   // Tendencia
            },
            "Me gusta ser eficiente en mi trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    39: {
        options: {
            "Me gusta ser creativo en mi trabajo": {
                C: 3,  // Creatividad
                T: 2   // Tendencia
            },
            "Me gusta hacer las cosas bien": {
                R: 3,  // Responsabilidad
                D: 2   // Determinación
            }
        }
    },
    40: {
        options: {
            "Me gusta recibir feedback constructivo": {
                S: 3,  // Sensibilidad
                A: 2   // Adaptabilidad
            },
            "Me gusta que mi trabajo sea reconocido": {
                B: 3,  // Bienestar
                E: 2   // Energía
            }
        }
    }
    41: {
        options: {
            "Me gusta crear nuevas oportunidades": {
                C: 3,  // Creatividad
                T: 2   // Tendencia
            },
            "Me gusta trabajar con metas claras": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    42: {
        options: {
            "Me gusta trabajar en un entorno dinámico": {
                A: 3,  // Adaptabilidad
                E: 2   // Energía
            },
            "Me gusta tener tiempo para desarrollar nuevas ideas": {
                C: 3,  // Creatividad
                T: 2   // Tendencia
            }
        }
    },
    43: {
        options: {
            "Me gusta ayudar a los demás a lograr sus objetivos": {
                B: 3,  // Bienestar
                L: 2   // Liderazgo
            },
            "Me gusta que mi trabajo sea desafiante": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            }
        }
    },
    44: {
        options: {
            "Me gusta trabajar con otros en un ambiente colaborativo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta tener control sobre mis tareas": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    45: {
        options: {
            "Me gusta recibir desafíos en mi trabajo": {
                T: 3,  // Tendencia
                C: 2   // Creatividad
            },
            "Me gusta que mi trabajo tenga un impacto positivo": {
                B: 3,  // Bienestar
                L: 2   // Liderazgo
            }
        }
    },
    46: {
        options: {
            "Me gusta estar involucrado en la toma de decisiones": {
                L: 3,  // Liderazgo
                T: 2   // Tendencia
            },
            "Me gusta trabajar en un ambiente ordenado": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    47: {
        options: {
            "Me gusta resolver problemas de manera creativa": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            },
            "Me gusta tener claridad en mis objetivos": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    48: {
        options: {
            "Me gusta que mi trabajo tenga un propósito": {
                B: 3,  // Bienestar
                T: 2   // Tendencia
            },
            "Me gusta aprender nuevas habilidades": {
                A: 3,  // Adaptabilidad
                C: 2   // Creatividad
            }
        }
    },
    49: {
        options: {
            "Me gusta trabajar en proyectos innovadores": {
                C: 3,  // Creatividad
                T: 2   // Tendencia
            },
            "Me gusta estar en un entorno colaborativo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    },
    50: {
        options: {
            "Me gusta tener control sobre el proceso de trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta recibir reconocimiento por mi trabajo": {
                B: 3,  // Bienestar
                E: 2   // Energía
            }
        }
    },
    51: {
        options: {
            "Me gusta ser el centro de atención en el trabajo": {
                E: 3,  // Energía
                X: 2   // Extroversión
            },
            "Me gusta trabajar en tareas que me desafíen": {
                C: 3,  // Creatividad
                T: 2   // Tendencia
            }
        }
    },
    52: {
        options: {
            "Me gusta colaborar en proyectos con otros": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta mantener un enfoque sistemático en mi trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    53: {
        options: {
            "Me gusta recibir reconocimiento por mis logros": {
                B: 3,  // Bienestar
                E: 2   // Energía
            },
            "Me gusta tomar la iniciativa en los proyectos": {
                L: 3,  // Liderazgo
                C: 2   // Creatividad
            }
        }
    },
    54: {
        options: {
            "Me gusta tener control sobre el proceso de trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta trabajar en un ambiente donde pueda expresar mis ideas": {
                C: 3,  // Creatividad
                X: 2   // Extroversión
            }
        }
    },
    55: {
        options: {
            "Me gusta trabajar con metas claras y específicas": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta estar involucrado en la toma de decisiones": {
                L: 3,  // Liderazgo
                T: 2   // Tendencia
            }
        }
    },
    56: {
        options: {
            "Me gusta participar en actividades que involucren a otros": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta tener un impacto positivo a través de mi trabajo": {
                B: 3,  // Bienestar
                C: 2   // Creatividad
            }
        }
    },
    57: {
        options: {
            "Me gusta resolver problemas de manera creativa": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            },
            "Me gusta trabajar en proyectos con un alto nivel de desafío": {
                T: 3,  // Tendencia
                D: 2   // Determinación
            }
        }
    },
    58: {
        options: {
            "Me gusta mantener mi trabajo ordenado y estructurado": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta tener libertad para desarrollar nuevas ideas": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            }
        }
    },
    59: {
        options: {
            "Me gusta trabajar en un entorno que fomente la colaboración": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta recibir feedback sobre mi desempeño": {
                S: 3,  // Sensibilidad
                B: 2   // Bienestar
            }
        }
    },
    60: {
        options: {
            "Me gusta involucrarme en la toma de decisiones importantes": {
                L: 3,  // Liderazgo
                T: 2   // Tendencia
            },
            "Me gusta ser creativo y proactivo en mi trabajo": {
                C: 3,  // Creatividad
                E: 2   // Energía
            }
        }
    },
    61: {
        options: {
            "Me gusta trabajar en un ambiente estructurado": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta colaborar en proyectos de equipo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    },
    62: {
        options: {
            "Me gusta tener un impacto directo en los resultados del trabajo": {
                B: 3,  // Bienestar
                L: 2   // Liderazgo
            },
            "Me gusta estar en constante aprendizaje y desarrollo": {
                A: 3,  // Adaptabilidad
                C: 2   // Creatividad
            }
        }
    },
    63: {
        options: {
            "Me gusta asumir responsabilidades y liderar proyectos": {
                L: 3,  // Liderazgo
                R: 2   // Responsabilidad
            },
            "Me gusta mantener un enfoque sistemático en mi trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    64: {
        options: {
            "Me gusta trabajar en un ambiente dinámico y en constante cambio": {
                A: 3,  // Adaptabilidad
                E: 2   // Energía
            },
            "Me gusta trabajar en tareas que impliquen creatividad": {
                C: 3,  // Creatividad
                T: 2   // Tendencia
            }
        }
    },
    65: {
        options: {
            "Me gusta que mi trabajo sea reconocido y valorado": {
                B: 3,  // Bienestar
                E: 2   // Energía
            },
            "Me gusta resolver problemas de manera innovadora": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            }
        }
    },
    66: {
        options: {
            "Me gusta colaborar con otros para alcanzar objetivos comunes": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta tener control sobre mis propias tareas": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    67: {
        options: {
            "Me gusta asumir nuevos retos y desafíos": {
                T: 3,  // Tendencia
                C: 2   // Creatividad
            },
            "Me gusta mantener un enfoque claro y ordenado en el trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    68: {
        options: {
            "Me gusta recibir feedback constructivo sobre mi desempeño": {
                S: 3,  // Sensibilidad
                B: 2   // Bienestar
            },
            "Me gusta trabajar en un ambiente colaborativo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    },
    69: {
        options: {
            "Me gusta tener claridad en mis metas y objetivos": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta ser innovador y encontrar nuevas soluciones": {
                C: 3,  // Creatividad
                T: 2   // Tendencia
            }
        }
    },
    70: {
        options: {
            "Me gusta trabajar en proyectos que desafíen mis habilidades": {
                A: 3,  // Adaptabilidad
                C: 2   // Creatividad
            },
            "Me gusta recibir reconocimiento por mis aportaciones": {
                B: 3,  // Bienestar
                E: 2   // Energía
            }
        }
    },
    71: {
        options: {
            "Me gusta trabajar en un entorno ordenado y sistemático": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta colaborar en proyectos de equipo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    },
    72: {
        options: {
            "Me gusta asumir responsabilidades y liderar": {
                L: 3,  // Liderazgo
                R: 2   // Responsabilidad
            },
            "Me gusta ser creativo en la resolución de problemas": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            }
        }
    },
    73: {
        options: {
            "Me gusta trabajar con metas claras y alcanzables": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta recibir desafíos en mi trabajo": {
                T: 3,  // Tendencia
                C: 2   // Creatividad
            }
        }
    },
    74: {
        options: {
            "Me gusta colaborar con otros para lograr objetivos comunes": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta mantener un enfoque estructurado y ordenado": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    75: {
        options: {
            "Me gusta tener un impacto directo en los resultados del trabajo": {
                B: 3,  // Bienestar
                L: 2   // Liderazgo
            },
            "Me gusta recibir reconocimiento por mis logros": {
                B: 3,  // Bienestar
                E: 2   // Energía
            }
        }
    },
    76: {
        options: {
            "Me gusta trabajar en un entorno que me permita innovar": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            },
            "Me gusta colaborar en proyectos con otros": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    },
    77: {
        options: {
            "Me gusta asumir retos y desafíos en mi trabajo": {
                T: 3,  // Tendencia
                C: 2   // Creatividad
            },
            "Me gusta tener un enfoque sistemático en mi trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    78: {
        options: {
            "Me gusta recibir feedback constructivo sobre mi trabajo": {
                S: 3,  // Sensibilidad
                B: 2   // Bienestar
            },
            "Me gusta trabajar en proyectos que impliquen creatividad": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            }
        }
    },
    79: {
        options: {
            "Me gusta tener claridad en mis metas y objetivos": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta ser innovador y encontrar nuevas soluciones": {
                C: 3,  // Creatividad
                T: 2   // Tendencia
            }
        }
    },
    80: {
        options: {
            "Me gusta trabajar en un entorno que valore la colaboración": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta recibir reconocimiento por mis aportaciones": {
                B: 3,  // Bienestar
                E: 2   // Energía
            }
        }
    },
    81: {
        options: {
            "Me gusta trabajar en un ambiente que me permita ser creativo": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            },
            "Me gusta tener claridad en mis objetivos y metas": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    82: {
        options: {
            "Me gusta asumir responsabilidades y liderar proyectos": {
                L: 3,  // Liderazgo
                R: 2   // Responsabilidad
            },
            "Me gusta trabajar en proyectos colaborativos": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    },
    83: {
        options: {
            "Me gusta recibir reconocimiento y valor por mi trabajo": {
                B: 3,  // Bienestar
                E: 2   // Energía
            },
            "Me gusta resolver problemas de manera creativa": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            }
        }
    },
    84: {
        options: {
            "Me gusta trabajar en un entorno que fomente la colaboración": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta mantener un enfoque claro y ordenado en el trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    85: {
        options: {
            "Me gusta asumir retos y desafíos que impliquen creatividad": {
                T: 3,  // Tendencia
                C: 2   // Creatividad
            },
            "Me gusta recibir feedback constructivo sobre mi desempeño": {
                S: 3,  // Sensibilidad
                B: 2   // Bienestar
            }
        }
    },
    86: {
        options: {
            "Me gusta trabajar en proyectos que impliquen una alta carga de trabajo": {
                D: 3,  // Determinación
                T: 2   // Tendencia
            },
            "Me gusta colaborar en proyectos de equipo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    },
    87: {
        options: {
            "Me gusta mantener un enfoque ordenado y sistemático": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            },
            "Me gusta recibir reconocimiento por mis logros": {
                B: 3,  // Bienestar
                E: 2   // Energía
            }
        }
    },
    88: {
        options: {
            "Me gusta asumir responsabilidades y liderar proyectos": {
                L: 3,  // Liderazgo
                R: 2   // Responsabilidad
            },
            "Me gusta ser creativo en la resolución de problemas": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            }
        }
    },
    89: {
        options: {
            "Me gusta colaborar con otros en la consecución de metas": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            },
            "Me gusta tener claridad y orden en mi trabajo": {
                O: 3,  // Organización
                R: 2   // Responsabilidad
            }
        }
    },
    90: {
        options: {
            "Me gusta resolver problemas de manera innovadora": {
                C: 3,  // Creatividad
                A: 2   // Adaptabilidad
            },
            "Me gusta trabajar en un entorno colaborativo y de apoyo": {
                X: 3,  // Extroversión
                S: 2   // Sensibilidad
            }
        }
    }
};
