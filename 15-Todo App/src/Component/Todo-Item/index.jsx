import { Card, CardActions, CardContent, Typography, Button } from "@mui/material";

export default function TodoItem({ todo, fetchDetailsOfCurrentTodo }) {
    return (
        <Card sx={{
            maxWidth: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <CardContent>
                <Typography variant="h5" color="text.secondary">{todo.todo}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        opacity: 0.75,
                        '&:hover': {
                            backgroundColor: 'black',
                            color: 'white',
                            opacity: 1,
                        }
                    }}
                >
                    Show Details
                </Button>
            </CardActions>
        </Card>
    );
}
