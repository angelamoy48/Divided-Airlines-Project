//Win: Winning game over screen, replay button
var Win = function(game) {};
Win.prototype =
{
    create: function()
    {
        game.bgMusic.stop();
        game.battleMusic.stop();
        game.bossMusic.stop();

        game.winMusic.play('', 0, 0.2, true);

        //Prompt for Replay
        game.add.text(230, 200, "You won: Restart?",
            {font: '30px Arial', fill: '#ffffff'});

        //Restart Button
        restartButton = game.add.button(400, 300, 'rewind', again, this);
        restartButton.anchor.x = 0.5;
        restartButton.anchor.y = 0.5;

        //Background color, because color is good
        game.stage.backgroundColor = "#007700";

        //Restart Key
        qKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    },
    update: function()
    {
        if (qKey.justPressed(qKey))
        {
            again();
        }
    }
};
